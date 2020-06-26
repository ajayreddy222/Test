package org.akeep.app;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


// import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SimpleSavedRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	/*
	By-the-way, the function to login is sitting in HeaderConfig.js
	(Ctrl-P in vscode to find files)
	*/

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			// enable oauth2 login
			.oauth2Login()
			.and()

			// enable /private/** for authenticated users
			.authorizeRequests()
			.antMatchers("/private/**")  // match request starting with /private
			.authenticated()
			.and()

			// enable all other endpoints (i think?) for everyone
			.authorizeRequests()
			.antMatchers("/**")
			.permitAll();
	}

	@Bean
	public RequestCache refererRequestCache() {
		return new HttpSessionRequestCache() {
			@Override
			public void saveRequest(HttpServletRequest request, HttpServletResponse response) {
				String referrer = request.getHeader("referer");
				if (referrer != null) {
					request.getSession().setAttribute("SPRING_SECURITY_SAVED_REQUEST", new SimpleSavedRequest(referrer));
				}
			}
		};
	}
}
