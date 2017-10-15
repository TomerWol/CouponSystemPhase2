package CouponSystem.WebServices;

import java.io.IOException;
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
import core.beans.Company;
import core.beans.Customer;
import core.exception.CouponSystemException;
import core.facade.AdminFacade;
import core.facade.clientType;

@Path("admin")
public class AdminResource {

	@Context
	HttpServletRequest request;
	@Context
	private HttpServletResponse response;

	private AdminFacade getFacade() throws CouponSystemException, IOException {
		String userName = null;
		String password = null;

		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");
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
				AdminFacade cookieFacade = (AdminFacade) CouponSystem.getInstance().login(userName, password,
						clientType.ADMIN);
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
		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");
		if (facade == null) {
			return Response.ok().status(500).build();
		}
		return Response.ok().status(200).build();
	}

	@POST
	@Path("/CreateCompany")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createCompany(Company company) {

		System.out.println(company.toString());
		try {
			AdminFacade admin = getFacade();
			admin.createCompany(company);
		} catch (CouponSystemException | IOException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok(company.getCompName() + " was created Successfully!").status(200).build();
	}

	@DELETE
	@Path("/DeleteCompany/{id}")
	public Response removeCompany(@PathParam("id") long id) {
		Company companyToDelete;
		try {
			AdminFacade admin = getFacade();
			companyToDelete = admin.getCompany(id);
			admin.removeCompany(companyToDelete);
		} catch (CouponSystemException | IOException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok("Company " + companyToDelete.getCompName() + " deleted successfully!").status(200).build();
	}

	@PUT
	@Path("/UpdateCompany")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateCompany(Company company) {

		try {
			AdminFacade admin = getFacade();
			admin.updateCompany(company);
		} catch (CouponSystemException | IOException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok("Company " + company.getCompName() + " updated successfully!").status(200).build();
	}

	@GET
	@Path("/GetCompany/{id}")
	public Response getCompany(@PathParam("id") long id) {

		Company company;
		try {
			AdminFacade admin = getFacade();
			company = admin.getCompany(id);
		} catch (CouponSystemException | IOException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok(company).status(200).build();
	}

	@GET
	@Path("/GetAllCompanies")
	public Response getAllCompanies() {
		GenericEntity<Collection<Company>> entity;
		try {
			AdminFacade admin = getFacade();
			Collection<Company> companies = admin.getAllCompanies();
			entity = new GenericEntity<Collection<Company>>(companies) {
			};
		} catch (CouponSystemException | IOException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok(entity).status(200).build();
	}

	@POST
	@Path("/CreateCustomer")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createCustomer(Customer customer) {
		System.out.println(customer.toString());
		try {
			AdminFacade admin = getFacade();
			admin.createCustomer(customer);
		} catch (CouponSystemException | IOException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok("Customer " + customer.getCustName() + " was created successfully!").status(200).build();
	}

	@DELETE
	@Path("/DeleteCustomer/{id}")
	public Response removeCustomer(@PathParam("id") long id) {
		Customer customerToDelete = null;
		try {
			AdminFacade admin = getFacade();
			customerToDelete = admin.getCustomer(id);
			admin.removeCustomer(customerToDelete);
		} catch (CouponSystemException | IOException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok("Customer " + customerToDelete.getCustName() + " was deleted successfully!").status(200)
				.build();
	}

	@PUT
	@Path("/UpdateCustomer")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateCustomer(Customer customer) {

		try {
			AdminFacade admin = getFacade();
			admin.updateCustomer(customer);
		} catch (CouponSystemException | IOException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok("Customer " + customer.getCustName() + " updated successfully!").status(200).build();
	}

	@GET
	@Path("/GetCustomer/{id}")
	public Response getCustomer(@PathParam("id") long id) {

		Customer customer = null;
		try {
			AdminFacade admin = getFacade();
			customer = admin.getCustomer(id);
		} catch (CouponSystemException | IOException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok(customer).status(200).build();
	}

	@GET
	@Path("/GetAllCustomers")
	public Response getAllCustomers() {
		GenericEntity<Collection<Customer>> entity;
		try {
			AdminFacade admin = getFacade();
			Collection<Customer> customers = admin.getAllCustomers();
			entity = new GenericEntity<Collection<Customer>>(customers) {
			};
		} catch (CouponSystemException | IOException e) {
			return Response.ok(e.getMessage()).status(500).build();
		}
		return Response.ok(entity).status(200).build();
	}
	

}