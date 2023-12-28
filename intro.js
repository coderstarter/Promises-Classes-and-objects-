              Interpreter 

// You might hear the terms interpreted and compiled in the context of programming.
// In interpreted languages, the code is run from top to bottom and the result of
// running the code is immediately returned. You don't have to transform the code 
// into a different form before the browser runs it. The code is received in its 
// programmer-friendly text form and processed directly from that.


             Compiler
// Compiled languages on the other hand are transformed (compiled) into another form before
//  they are run by the computer. For example, C/C++ are compiled into machine code that is 
//  then run by the computer. The program is executed from a binary format, which was generated 
//  from the original program source code.

JS Intro
// JavaScript interpreters actually use a technique called just-in-time compiling to 
// improve performance; the JavaScript source code gets compiled into a faster, binary
//  format while the script is being used, so that it can be run as quickly as possible.
//   However, JavaScript is still considered an interpreted language, since the compilation
//    is handled at run time, rather than ahead of time.


// Three ways to add JavaScript to your code.
// 1.Internal JS -> putting in head of html.
// 2. External JS -> by providing the js file path and name
// 3.Inline Js handlers


Script loading strategies
DEFER : 
// The defer attribute, which tells the browser to continue downloading the HTML content
// once the <script> tag element has been reached.

// The problem with this solution is that loading/parsing of the script is completely blocked until
// the HTML DOM has been loaded. On larger sites with lots of JavaScript, this can cause a major 
// performance issue, slowing down your site.


ASYNC :
// Scripts loaded using the async attribute will download the script without blocking the page while
//  the script is being fetched. However, once the download is complete, the script will execute, 
//  which blocks the page from rendering. This means that the rest of the content on the web page is
//   prevented from being processed and displayed to the user until the script finishes executing. 
//   You get no guarantee that scripts will run in any specific order. It is best to use async when
//    the scripts in the page run independently from each other and depend on no other script on the 
//    page.

// async should be used when you have a bunch of background scripts to load in, and you just want to 
// get them in place as soon as possible. For example, maybe you have some game data files to load, 
// which will be needed when the game actually begins, but for now you just want to get on with showing 
// the game intro, titles, and lobby, without them being blocked by script loading.