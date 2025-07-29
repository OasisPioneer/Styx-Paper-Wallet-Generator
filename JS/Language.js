document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 语言字典 ---
    const translations = {
        en: {
            // 页面标题
            page_title: "Styx Paper Wallet Generator",
            // 主界面
            main_title: "Styx Paper Wallet Generator",
            intro_text: "A safer way to store your assets",
            mnemonic_placeholder: "Enter your 12 or 24-word mnemonic phrase here...",
            wallet_title_placeholder: "Enter wallet name (as card title)",
            notes_placeholder: "Enter notes for this wallet...",
            generate_btn: "Generate Paper Wallet",
            // 错误信息
            error_invalid_mnemonic: "Invalid mnemonic. Please check spelling and word count.",
            error_generation_failed: "Failed to generate wallet, check console for more info.",
            logo_title_text: "Styx Studio | Paper Wallet Generator",
            // 卡片正面
            mnemonic_title: "Mnemonic",
            notes_title: "Notes",
            notes_default: "No notes for this wallet.",
            logo_donation_text: "If you find this project helpful, you can make a donation.",
            // 卡片背面
            instructions_title: "Instructions",
            instruction_1: "After printing, fold inwards along the dashed lines.",
            instruction_2: "Store the card in a safe, waterproof, and fireproof location.",
            instruction_3: "It is recommended to make multiple copies for backup.",
            instruction_4: "Consider laminating or hardening the card for durability.",
            warning_title: "Security Warning",
            warning_1: "Ensure this tool is used on a device disconnected from the internet.",
            warning_2: "Do not use the clipboard to copy or paste your mnemonic phrase.",
            warning_3: "The mnemonic is the master key to your assets.",
            warning_4: "Do not store or transmit the mnemonic in any digital form.",
            warning_5: "Anyone who obtains your mnemonic will have full control of your funds.",
            warning_6: "Do not scramble the order of the words, or you will lose it.",
            logo_safe_storage_text: "A safer way to store your assets",
            // 打印按钮
            print_btn: "Print Wallet"
        },
        zh: {
            // 页面标题
            page_title: "冥河纸钱包生成器",
            // 主界面
            main_title: "冥河纸钱包生成器",
            intro_text: "用更安全的方式来存储您的资产",
            mnemonic_placeholder: "在此输入您的 12 或 24 个单词的助记词...",
            wallet_title_placeholder: "输入钱包名称 (将作为卡片标题)",
            notes_placeholder: "输入此钱包的备注信息...",
            generate_btn: "生成纸钱包",
            // 错误信息
            error_invalid_mnemonic: "无效的助记词。请检查单词拼写和数量。",
            error_generation_failed: "生成钱包失败，请检查控制台获取更多信息。",
            logo_title_text: "冥河工作室 | 纸钱包生成器",
            // 卡片正面
            mnemonic_title: "Mnemonic", // 保持英文，或改为“助记词”
            notes_title: "备注",
            notes_default: "此钱包无备注信息。",
            logo_donation_text: "如果您觉得该项目对您有帮助可以对项目进行捐赠。",
            // 卡片背面
            instructions_title: "使用说明",
            instruction_1: "打印卡片之后按照虚线向内进行折叠。",
            instruction_2: "将卡片存放在防火防水等安全的位置。",
            instruction_3: "建议制作多个卡片用于进行分散备份。",
            instruction_4: "建议将卡片进行塑封还有硬化等处理。",
            warning_title: "安全警告",
            warning_1: "请您确保设备在断网情况下使用本工具。",
            warning_2: "请勿使用剪贴板复制或粘贴您的助记词。",
            warning_3: "助记词是您访问当前资产的唯一主密钥。",
            warning_4: "请勿以任何数字形式存储或传输助记词。",
            warning_5: "任何拥有助记词的人都将完全控制资金。",
            warning_6: "请勿打乱助记词的顺序否则你将失去它。",
            logo_safe_storage_text: "用更安全的方式来存储您的资产",
            // 打印按钮
            print_btn: "打印钱包"
        }
    };

    // --- 2. 获取所有需要操作的DOM元素 ---
    const langBtn = document.getElementById('lang-btn');

    // --- 3. 核心功能函数 ---

    /**
     * 根据指定的语言更新页面所有UI文本
     * @param {string} lang - 'en' 或 'zh'
     */
    function setLanguage(lang) {
        const langPack = translations[lang] || translations.en; // 如果语言包不存在，默认使用英文

        // 更新所有带 data-lang-key 属性的元素
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (langPack[key]) {
                // 检查是否是需要设置 placeholder 的输入框
                if (element.placeholder !== undefined) {
                    element.placeholder = langPack[key];
                } else {
                    element.innerHTML = langPack[key];
                }
            }
        });

        // 单独更新页面标题
        document.title = langPack.page_title;

        // 更新语言切换按钮的文本和状态
        if (lang === 'en') {
            langBtn.textContent = '中文';
            langBtn.setAttribute('data-lang', 'zh');
            document.documentElement.lang = 'en';
        } else {
            langBtn.textContent = 'EN';
            langBtn.setAttribute('data-lang', 'en');
            document.documentElement.lang = 'zh-CN';
        }
    }

    // --- 4. 事件监听器 ---

    // “语言切换”按钮的点击事件
    langBtn.addEventListener('click', () => {
        const nextLang = langBtn.getAttribute('data-lang');
        setLanguage(nextLang);
    });

    // --- 5. 页面初始化 ---

    // 页面加载时，根据浏览器首选语言自动设置默认语言
    const userLang = navigator.language || navigator.userLanguage;
    const defaultLang = userLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
    setLanguage(defaultLang);

});