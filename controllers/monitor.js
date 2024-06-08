const prettier = require('prettier');

const formatCode = async (req, res) => {
    const { code } = req.body;
    console.log(code);
    try {
        const formattedCode = await prettier.format(code, { parser: "html" });
        console.log(formattedCode);
        res.json({ formattedCode });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports = {
    formatCode,
};