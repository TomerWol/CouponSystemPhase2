package CouponSystem.WebServices;

import java.util.Collection;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
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
import core.facade.AdminFacade;
import core.facade.CustomerFacade;
import core.facade.clientType;

@Path("customer")
public class CustomerResource {

	@Context
	HttpServletRequest request;
	@Context
	private HttpServletResponse response;

	private CustomerFacade login() throws CouponSystemException {

		String userName = null;
		String password = null;

		CustomerFacade facade = (CustomerFacade) request.getSession().getAttribute("facade");
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
				CustomerFacade cookieFacade = (CustomerFacade) CouponSystem.getInstance().login(userName, password,
						clientType.CUSTOMER);
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
		CustomerFacade facade = (CustomerFacade) request.getSession().getAttribute("facade");
		if (facade == null) {
			return Response.ok().status(500).build();
		}
		return Response.ok().status(200).build();
	}

	@POST
	@Path("/PurchaseCoupon")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response purchaseCoupon(Coupon coupon) {
		try {
			CustomerFacade cf = login();
			cf.purchaseCoupon(coupon);
		} catch (CouponSystemException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok("Coupon " + coupon.getTitle() + " purchased successfully!").status(200).build();
	}

	@GET
	@Path("/GetCustomerCoupons")
	public Response getCustomerCoupons() {
		GenericEntity<Collection<Coupon>> entity;
		try {
			CustomerFacade cf = login();
			Collection<Coupon> customerCoupons = cf.getCustomerCoupons();
			entity = new GenericEntity<Collection<Coupon>>(customerCoupons) {
			};
		} catch (CouponSystemException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok(entity).status(200).build();
	}

	@GET
	@Path("/GetAllCouponsByType/{type}")
	public Response getCustomerCouponsByType(@PathParam("type") String type) {
		CouponType EnumType = CouponType.valueOf(type);
		GenericEntity<Collection<Coupon>> entity;
		try {
			CustomerFacade cf = login();
			Collection<Coupon> customerCouponsByType = cf.getCustomerCouponsByType(EnumType);
			if (customerCouponsByType.isEmpty()) {
				return Response.ok("There are no Coupons with that type").status(500).build();
			} else {
				entity = new GenericEntity<Collection<Coupon>>(customerCouponsByType) {
				};
			}
		} catch (CouponSystemException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok(entity).status(200).build();
	}

	@GET
	@Path("/GetAllCouponsByPrice/{price}")
	public Response getCustomerCouponsByPrice(@PathParam("price") double price) {
		GenericEntity<Collection<Coupon>> entity;
		try {
			CustomerFacade cf = login();
			Collection<Coupon> customerCouponsByPrice = cf.getCustomerCouponsByPrice(price);
			if (customerCouponsByPrice.isEmpty()) {
				return Response.ok("There are no Coupons with that price").status(500).build();
			} else {
				entity = new GenericEntity<Collection<Coupon>>(customerCouponsByPrice) {
				};
			}
		} catch (CouponSystemException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok(entity).status(200).build();
	}
	
	//בחלק א' של הפרויקט שכחתי לעשות מתודה בצד של הלקוח שמראה לו את כל הקופונים הקיימים וישנו מתודה כזאת בחלק של אדמין ולכן נאלצתי לעשות את זה דרך האדמין כדי לא לשנות את חלק א
	//לכן אני יוצר פה לוגין פקטיבי כדי שיוכל לראות את כל הקופונים הקיימים באת רכישת קופונים
	@GET
	@Path("/GetAllCoupons")
	public Response getAllCoupons() {
		GenericEntity<Collection<Coupon>> entity;
		try {
			AdminFacade admin = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", clientType.ADMIN);
			Collection<Coupon> coupons = admin.getAllCoupons();
			entity = new GenericEntity<Collection<Coupon>>(coupons) {
			};
		} catch (CouponSystemException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok(entity).status(200).build();
	}

}
