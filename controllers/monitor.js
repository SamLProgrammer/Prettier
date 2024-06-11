const prettier = require('prettier');

const formatCode = async (req, res) => {
    const { code } = req.body;

    // Apply replacements directly on the code string
    // const codeToFormat = code.replace(/\s+/g, ' ').replace(/(["'])/g, '\\$1');

    try {
        const formattedCode = await prettier.format(code, { parser: "lwc" });
        console.log(formattedCode);
        res.json({ formattedCode });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}




module.exports = {
    formatCode,
};