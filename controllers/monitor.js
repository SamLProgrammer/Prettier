const prettier = require('prettier');
const eslint = require('eslint');
const prettierEslint = require('prettier-eslint');

// const formatCode = async (req, res) => {
//     const { code } = req.body;
//     console.log(code);
//     try {
//         const escapedCode = code.replace(/\n/g, '\\n');
//         const formattedCode = await prettier.format(code, { parser: 'babel' });
//         console.log(formattedCode);
//         res.json({ formattedCode });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }

// }

const formatCode = async (req, res) => {
    const { code } = req.body;
    console.log(code); // Check the code before formatting
    try {
        const formattedCode = await prettierEslint.format(code);
        console.log(formattedCode); // Check the formatted code
        res.json({ formattedCode });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    formatCode,
};