package CouponSystem.WebServices;

import java.util.Collection;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import core.CouponSystem;
import core.beans.Coupon;
import core.beans.CouponType;
import core.exception.CouponSystemException;
import core.facade.CompanyFacade;
import core.facade.clientType;

@Path("company")
public class CompanyResource {

	@Context
	HttpServletRequest request;
	@Context
	private HttpServletResponse response;

	private CompanyFacade getFacade() throws CouponSystemException {
		String userName = null;
		String password = null;
		
		CompanyFacade facade = (CompanyFacade) request.getSession().getAttribute("facade");
		if (facade == null) {

			Cookie[] cookies = request.getCookies();
			for (Cookie cookie : cookies) {

				switch (cookie.getName()) {

				case "userName":
					userName = cookie.getValue();
					break;
				case "password":
					password = cookie.getValue();
					break;
				}
			}
			if (userName != null && password != null) {
				CompanyFacade cookieFacade = (CompanyFacade) CouponSystem.getInstance().login(userName, password, clientType.COMPANY);
				return cookieFacade;
			} else {
				throw new CouponSystemException("Need to log in");
			}

		}
		return facade;

	}
	
	@GET
	@Path("/checkFacade")
	public Response checkFacade() {
		CompanyFacade facade = (CompanyFacade) request.getSession().getAttribute("facade");
		if (facade == null) {
			return Response.ok().status(500).build();
		}
		return Response.ok().status(200).build();
	}

	@POST
	@Path("/CreateCoupon")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createCoupon(Coupon coupon) {
		System.out.println(coupon);
		try {
			CompanyFacade cf = getFacade();
			cf.createCoupon(coupon);
		} catch (CouponSystemException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok("Coupon " + coupon.getTitle() + " was created successfully!").status(200).build();
	}

	@DELETE
	@Path("/DeleteCoupon/{id}")
	public Response removeCoupon(@PathParam("id") long id) {
		Coupon couponToDelete;
		try {
			CompanyFacade cf = getFacade();
			couponToDelete = cf.getCoupon(id);
			cf.removeCoupon(couponToDelete);
		} catch (CouponSystemException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok("Coupon " + couponToDelete.getTitle() + " was deleted successfully!").status(200).build();
	}

	@PUT
	@Path("/UpdateCoupon")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateCoupon(Coupon coupon) {

		try {
			CompanyFacade cf = getFacade();
			cf.updateCoupon(coupon);
		} catch (CouponSystemException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok("Coupon " + coupon.getTitle() + " was updated successfully!").status(200).build();
	}

	@GET
	@Path("/GetCoupon/{id}")
	public Response getCoupon(@PathParam("id") long id) {
		Coupon coupon;
		try {
			CompanyFacade cf = getFacade();
			coupon = cf.getCoupon(id);
		} catch (CouponSystemException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok(coupon).status(200).build();
	}

	@GET
	@Path("/GetAllCoupons")
	public Response getAllCompanyCoupons() {
		GenericEntity<Collection<Coupon>> entity;
		try {
			CompanyFacade cf = getFacade();
			Collection<Coupon> companyCoupons = cf.getAllCompanyCoupons();
			entity = new GenericEntity<Collection<Coupon>>(companyCoupons) {
			};
		} catch (CouponSystemException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok(entity).status(200).build();
	}

	@GET
	@Path("/GetAllCouponsByType/{type}")
	public Response getAllCompanyCouponsByType(@PathParam("type") String type) {
		GenericEntity<Collection<Coupon>> entity;
		try {
			CouponType EnumType = CouponType.valueOf(type);
			CompanyFacade cf = getFacade();
			Collection<Coupon> couponsByType = cf.getAllCompanyCouponsByType(EnumType);
			if (couponsByType.isEmpty()) {
				return Response.ok("There is no coupon with that type").status(500).build();
			} else {
				entity = new GenericEntity<Collection<Coupon>>(couponsByType) {
				};
			}
		} catch (CouponSystemException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok(entity).status(200).build();
	}

	@GET
	@Path("/GetAllCouponsByPrice/{price}")
	public Response getAllCompanyCouponsByPrice(@PathParam("price") double price) {
		GenericEntity<Collection<Coupon>> entity;
		try {
			CompanyFacade cf = getFacade();
			Collection<Coupon> couponsByPrice = cf.getAllCompanyCouponsByPrice(price);
			if (couponsByPrice.isEmpty()) {
				return Response.ok("There is no coupon with that price").status(500).build();
			} else {
				entity = new GenericEntity<Collection<Coupon>>(couponsByPrice) {
				};
			}
		} catch (CouponSystemException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok(entity).status(200).build();
	}
}
