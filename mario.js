printPyramid(20);
 // * printPyramid
 // *
 // * Prints to the console a pyramid of '#' characters of the specified height
 // * For example, if height is 5, the console will look like this:
 // *          ##
 // *         ###
 // *        ####
 // *       #####
 // *      ######
 // */
function printPyramid(height) {
    for (var row = 1; row <= height; row ++){
        var spacecount = height-row;
        var hashcount = row;
        var space = "";
        var hash = "";
        for (var i = spacecount; i > 0; i--)
            space += " ";
        for (var j = 0; j <= hashcount; j++)
            hash += "#";
            console.log(space,hash);
            }
};
//console.log("Show me something!")
