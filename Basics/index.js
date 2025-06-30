// 1. Difference b/w async and defer attribute

/*

So async and defer attributes are used along with script tag
to load the external script file. into our webpage.

there r 3 ways to load script file in our webpage.

1. Normal
2. Async
3. Defer

Note :
        as we load our page

        1. HTML PARSING then AST created then CSS file also loaded and attached css with html
        2. Loading of scripts
            2.1 . Fetching of scripts
            2.2 Execution of scripts

        
            Case: 1 : <script src="index.js"></script>

                - Html parsing started once we get script tag
                html parsing stopped,
                then script fetching started
                once it fetched then we get script execution
                then html parsing restart again


            Case: 2 : <script src="index.js" async></script>

                - Html parsing started , along with this script fetching started asyncly
                once it feched script then html parsing stopped
                then script execution started
                then html parsing restart again

                Doest not maintain order of execution of script

            Case: 3 : <script src="index.js" defer></script>
                - Html parsing started , along with this script fetching started asyncly
                once it feched script 
                till it wait for html parsing done 
                once html parsing done the  only then script execution started
                
                MOstly used - 
                Maintain order of execution of script


*/