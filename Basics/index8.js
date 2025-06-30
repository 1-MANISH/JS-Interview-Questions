/*

        1.CORS 
        2. Preflight Request Or Options call

        CORS - Cross-Origin Resource Sharing

                - Cors is a mechanism is used to allow
                access to resources from a different origin
                (domain, protocol, or port,subdomain) .

                cors is a security mechanism that
                restricts cross-origin HTTP requests
                to only those origins that have been
                explicitly approved.
                
                it uses addition headers to tell the browser that whether a web app
                is allowed to share his resources with other web apps

                Note : it both app have same origin then resources can be shared easily

                Before cors it was not possible to share resources between different origin
                        1. subdomain
                        2. port
                        3. protocol
                        4. another domain obsoually

                After CORS become security standard

                Browser do allows access to resources from a different origin
                but it is not possible to share resources easily between different origin

                How the cors works - Behind the seen

                let suppose
                ORIGIN1 - (manish.in client)
                ORIGIN2 - (google.com/api/getData/user)

                If do getData post request to server then 
                first client sent a preflight request to server which also called options request
                IT verify by server and server sent back some addition headers 
                to tell browser that this check safe to share resources

                Additional Headers sent are - 
                        Access-Control-Allow-Origin:*  or [manish.in]
                        Access-Control-Allow-Methods:GET,POST,PUT,DELETE
                        Access-Control-Allow-Headers:Content-Type
                        Access-Control-Allow-Credentials:true // this is for cookies


        IS Every api call to server need to sent every time preflight request?
                -No it is not required
                Browser classify all request into
                1. simple request
                2. preflight request
                3. actual request

     Does the browser always make a preflight OPTIONS request?
                        No. Only when:
                        Using non-simple requests
                        Methods other than GET, POST, or HEAD
                        Custom headers (like Authorization)
                        Content type other than application/x-www-form-urlencoded, text/plain, or multipart/form-data
                        If you're just doing a simple GET request, no preflight happens.

        Error : No : ACcess-Control-Allow-Origin
                we to set header from server side to allow access from client side

         What browser versions support CORS?
                All modern browsers support CORS:

                Chrome 3+
                Firefox 3.5+
                Safari 4+
                Edge, Opera, Brave, etc.
                

*/