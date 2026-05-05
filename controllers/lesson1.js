const jenniferRoute = (req, res) => {
    res.send('Jennifer Malan');
};

const jonRoute = (req, res) => {
    res.send('Jon Malan')
};

const garrettRoute = (req, res) => {
    res.send('Garrett Malan');
}
module.exports = {
    jenniferRoute,
    jonRoute,
    garrettRoute
};