package CouponSystem.WebServices;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import core.CouponSystem;
import core.exception.CouponSystemException;
import core.facade.AdminFacade;
import core.facade.CompanyFacade;
import core.facade.CustomerFacade;
import core.facade.clientType;

@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)

			throws ServletException, IOException {

		String userName = request.getParameter("userName");
		String password = request.getParameter("password");
		String type = request.getParameter("Type");
		String remember = request.getParameter("remember");
		boolean login = true;
		AdminFacade adminF = null;
		CompanyFacade companyF = null;
		CustomerFacade customerF = null;

		switch (type) {
		case "Admin":
			try {
				adminF = (AdminFacade) CouponSystem.getInstance().login(userName, password, clientType.ADMIN);
			} catch (CouponSystemException e) {
				System.out.println(e.getMessage());
				login = false;
			}
			if (login == true) {

				if (remember != null) {
					Cookie adminUserCookie = new Cookie("userName", userName);
					Cookie adminPassCookie = new Cookie("password", password);
					Cookie adminTypeCookie = new Cookie("type", type);
					response.addCookie(adminUserCookie);
					response.addCookie(adminPassCookie);
					response.addCookie(adminTypeCookie);
				}

				request.getSession().setAttribute("facade", adminF);
				response.sendRedirect("Admin/adminMain.html");
				break;
			} else {
				response.sendRedirect("failedLogin.html");
				break;
			}
		case "Company":
			try {
				companyF = (CompanyFacade) CouponSystem.getInstance().login(userName, password, clientType.COMPANY);
			} catch (CouponSystemException e) {
				System.out.println(e.getMessage());
				login = false;
			}
			if (login == true) {

				if (remember != null) {
					Cookie companyUserCookie = new Cookie("userName", userName);
					Cookie companyPassCookie = new Cookie("password", password);
					Cookie companyTypeCookie = new Cookie("type", type);
					response.addCookie(companyUserCookie);
					response.addCookie(companyPassCookie);
					response.addCookie(companyTypeCookie);
				}

				request.getSession().setAttribute("facade", companyF);
				response.sendRedirect("Company/companyMain.html");
				break;
			} else {
				response.sendRedirect("failedLogin.html");
				break;
			}
		case "Customer":
			try {
				customerF = (CustomerFacade) CouponSystem.getInstance().login(userName, password, clientType.CUSTOMER);
			} catch (CouponSystemException e) {
				System.out.println(e.getMessage());
				login = false;
			}
			if (login == true) {

				if (remember != null) {
					Cookie customerUserCookie = new Cookie("userName", userName);
					Cookie customerPassCookie = new Cookie("password", password);
					Cookie customerTypeCookie = new Cookie("type", type);
					response.addCookie(customerUserCookie);
					response.addCookie(customerPassCookie);
					response.addCookie(customerTypeCookie);
				}

				request.getSession().setAttribute("facade", customerF);
				response.sendRedirect("Customer/customerMain.html");
				break;
			} else {
				response.sendRedirect("failedLogin.html");
				break;
			}
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
