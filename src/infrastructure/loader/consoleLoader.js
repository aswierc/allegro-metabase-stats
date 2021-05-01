module.exports = (text, callback) => {
    let x = 0;
    let chars = ["⠙", "⠘", "⠰", "⠴", "⠤", "⠦", "⠆", "⠃", "⠋", "⠉"]

    return setInterval(function() {
        process.stdout.write("\r" + chars[x++] + " " + text);
        x = x % chars.length;
        callback(this)
    }, 500);
}
