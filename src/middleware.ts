import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const isPublicRoute = createRouteMatcher(["/auth"]);

export default convexAuthNextjsMiddleware(async (request) => {
  const authenticated = await isAuthenticatedNextjs();

  if (!isPublicRoute(request) && !authenticated) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }

  if (isPublicRoute(request) && authenticated) {
    return nextjsMiddlewareRedirect(request, "/");
  }
  // todo: redirect to home page if authenticated
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
