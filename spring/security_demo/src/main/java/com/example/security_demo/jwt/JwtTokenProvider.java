package com.example.security_demo.jwt;

import com.example.security_demo.models.RoleModel;
import com.example.security_demo.service.impl.UserModelServiceImpl;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@Component
public class JwtTokenProvider {

    @Value("${jwt.token.secret}")
    private String secretKey;

    @Value("${jwt.token.expired}")
    private long validityInMilliseconds;

    @Autowired
    private UserModelServiceImpl userModelService;

    public String createToken(String username, RoleModel role) {

        Date now = new Date();

        String token = Jwts.builder()
                .setSubject(username)
                .claim("authorities", role.getName())
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + validityInMilliseconds))
                .signWith(Keys.hmacShaKeyFor(secretKey.getBytes()))
                .compact();

        return token;
    }

    public boolean validateToken(String token) {
        Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(token);
        return !claims.getBody().getExpiration().before(new Date());
    }

    public UsernamePasswordAuthenticationToken parserToken(String token){
        final JwtParser jwtParser = Jwts.parser().setSigningKey(Keys.hmacShaKeyFor(secretKey.getBytes()));
        final Jws<Claims> claimsJws = jwtParser.parseClaimsJws(token);
        final Claims claims = claimsJws.getBody();
        String username = claims.getSubject();
        UserDetails userDetails = this.userModelService.loadUserByUsername(username);
        final Collection<? extends GrantedAuthority> authorities = Arrays.stream(claims.get("authorities").toString().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
        return new UsernamePasswordAuthenticationToken(userDetails, null, authorities);
    }

}
