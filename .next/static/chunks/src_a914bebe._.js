(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    // 引数が1つで文字列の場合は最適化パスを使用
    if (inputs.length === 1 && typeof inputs[0] === 'string') {
        return inputs[0];
    }
    // 複数の引数または複雑な型の場合は通常のマージ処理
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/animation-wrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AnimationWrapper": (()=>AnimationWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
// framer-motionを動的インポートして初期バンドルサイズを削減
const MotionDiv = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.r("[project]/node_modules/framer-motion/dist/es/index.mjs [app-client] (ecmascript, async loader)")(__turbopack_context__.i).then((module)=>({
            default: module.motion.div
        })));
_c = MotionDiv;
const AnimationWrapper = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ children, className = '', style = {}, onClick, id, fadeIn = false, slideUp = false, hoverScale = false, hoverLift = false, delay = 0, useFramerMotion = false, initial, whileInView, whileHover, transition, viewport }, ref)=>{
    // CSS-only animations (lightweight)
    if (!useFramerMotion) {
        const animationClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Base transitions
        'transition-all duration-500 ease-out', // Fade in animation
        fadeIn && 'animate-in fade-in duration-700', // Slide up animation
        slideUp && 'animate-in slide-in-from-bottom-4 duration-700', // Hover effects
        hoverScale && 'hover:scale-105', hoverLift && 'hover:-translate-y-1 hover:shadow-lg', className);
        const animationStyle = {
            animationDelay: delay ? `${delay * 100}ms` : undefined,
            ...style
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            id: id,
            className: animationClasses,
            style: animationStyle,
            onClick: onClick,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/animation-wrapper.tsx",
            lineNumber: 90,
            columnNumber: 9
        }, this);
    }
    // Complex animations using framer-motion (heavy - use sparingly)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            id: id,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('transition-all duration-300', className),
            style: style,
            onClick: onClick,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/animation-wrapper.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionDiv, {
            ref: ref,
            id: id,
            className: className,
            style: style,
            onClick: onClick,
            initial: initial,
            whileInView: whileInView,
            whileHover: whileHover,
            transition: transition,
            viewport: viewport,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/animation-wrapper.tsx",
            lineNumber: 117,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/animation-wrapper.tsx",
        lineNumber: 104,
        columnNumber: 7
    }, this);
});
_c2 = AnimationWrapper;
AnimationWrapper.displayName = 'AnimationWrapper';
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MotionDiv");
__turbopack_context__.k.register(_c1, "AnimationWrapper$forwardRef");
__turbopack_context__.k.register(_c2, "AnimationWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animation$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/animation-wrapper.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ children, className = '', style = {}, onClick, id, size = 'md', variant = 'default', padding = 'md', animated = false, hoverEffect = false, delay = 0, useComplexAnimation = false }, ref)=>{
    // Size classes for border radius and overall sizing
    const sizeClasses = {
        xs: 'rounded-lg',
        sm: 'rounded-xl',
        md: 'rounded-2xl',
        lg: 'rounded-3xl',
        xl: 'rounded-3xl'
    };
    // Padding classes
    const paddingClasses = {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-12'
    };
    // Variant classes (宮古島キャンドルテーマ対応)
    const variantClasses = {
        default: 'bg-white shadow-md border border-gray-100',
        gradient: 'bg-gradient-to-br from-[#FFF7FA] to-[#FCE6F6] shadow-lg border-2 border-[#F4C2C1]/30',
        glass: 'bg-white/80 backdrop-blur-sm shadow-lg border border-white/20',
        border: 'bg-white border-2 border-[#4FC3E7] shadow-sm',
        shadow: 'bg-white shadow-xl border border-gray-50'
    };
    const baseStyles = {
        ...style
    };
    const baseClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('transition-all duration-300', sizeClasses[size], variantClasses[variant], paddingClasses[padding], // Enhanced hover effects with CSS
    hoverEffect && [
        'hover:shadow-xl hover:-translate-y-1 cursor-pointer',
        // Variant-specific hover effects
        variant === 'gradient' && 'hover:from-[#FFF7FA]/95 hover:to-[#FCE6F6]/95',
        variant === 'glass' && 'hover:bg-white/90',
        variant === 'border' && 'hover:border-[#4FC3E7]/80 hover:shadow-[#4FC3E7]/20'
    ], className);
    if (animated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$animation$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationWrapper"], {
            ref: ref,
            id: id,
            className: baseClassName,
            style: baseStyles,
            onClick: onClick,
            fadeIn: true,
            slideUp: true,
            hoverLift: hoverEffect,
            delay: delay,
            useFramerMotion: useComplexAnimation,
            // Complex animation fallback props
            initial: useComplexAnimation ? {
                opacity: 0,
                y: 20
            } : undefined,
            whileInView: useComplexAnimation ? {
                opacity: 1,
                y: 0
            } : undefined,
            viewport: useComplexAnimation ? {
                once: true,
                margin: '-50px'
            } : undefined,
            transition: useComplexAnimation ? {
                duration: 0.6,
                delay,
                ease: 'easeOut'
            } : undefined,
            whileHover: useComplexAnimation && hoverEffect ? {
                y: -4,
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
            } : undefined,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/card.tsx",
            lineNumber: 98,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        id: id,
        className: baseClassName,
        style: baseStyles,
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 140,
        columnNumber: 7
    }, this);
});
_c1 = Card;
Card.displayName = 'Card';
var _c, _c1;
__turbopack_context__.k.register(_c, "Card$forwardRef");
__turbopack_context__.k.register(_c1, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/master.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * マスタデータ管理ファイル
 * 全体で使用される共通データをここで一元管理します
 */ // ==================== 体験メニュー ====================
__turbopack_context__.s({
    "ADDITIONAL_OPTIONS": (()=>ADDITIONAL_OPTIONS),
    "BUSINESS_INFO": (()=>BUSINESS_INFO),
    "EXPERIENCE_MENUS": (()=>EXPERIENCE_MENUS),
    "GOOGLE_CONFIG": (()=>GOOGLE_CONFIG),
    "RESERVATION_CONFIG": (()=>RESERVATION_CONFIG),
    "SOCIAL_MEDIA": (()=>SOCIAL_MEDIA),
    "calculateTotalPrice": (()=>calculateTotalPrice),
    "formatPrice": (()=>formatPrice),
    "getMenuById": (()=>getMenuById),
    "getOptionById": (()=>getOptionById)
});
const EXPERIENCE_MENUS = [
    {
        id: 'cylinder',
        name: '円柱キャンドル',
        price: 4000,
        description: '色とりどりのワックスを重ねて美しいマーブル模様を作ります。初心者の方にもおすすめです。',
        features: [
            'カラフル',
            'Instagram映え',
            '手作り感'
        ],
        popularity: 85,
        image: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/c9757b37-882f-4c32-5e36-58cc3a7fd300/square500',
        badge: '人気No.1'
    },
    {
        id: 'shell',
        name: '貝殻キャンドル',
        price: 3000,
        description: '宮古島の美しい海をイメージしたシェルモチーフの特別なキャンドル。南国の思い出を形に残しませんか？',
        features: [
            '宮古島限定',
            'シェルモチーフ',
            '記念品向け'
        ],
        popularity: 92,
        image: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/23aea446-aa19-4e5a-96e7-25c40e991300/square500',
        badge: 'ベストセラー'
    },
    {
        id: 'sphere',
        name: '球体キャンドル',
        price: 3500,
        description: 'ころんと可愛い球体型のキャンドル。宮古島の海や空をイメージしたグラデーションが人気です。',
        features: [
            '球体デザイン',
            'グラデーション',
            'インテリア向け'
        ],
        popularity: 88,
        image: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/ae9e5e34-1a81-4b5d-0c4c-2c55c8a87000/square500',
        badge: 'Instagram人気'
    },
    {
        id: 'sphere-big',
        name: '球体キャンドル(Big)',
        price: 5000,
        description: '特大サイズの球体キャンドル。じっくり時間をかけて自分だけの世界観を表現できます。',
        features: [
            '大サイズ',
            '特別体験',
            '世界観表現'
        ],
        popularity: 76,
        image: 'https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/c7c04e12-24ea-4c22-457d-5f5e7fb01b00/square500',
        badge: '限定メニュー'
    }
];
const ADDITIONAL_OPTIONS = [
    {
        id: 'gold-leaf',
        name: '金箔',
        price: 500,
        description: '高級感あふれる金箔で特別な輝きを',
        icon: '🌟',
        detailDescription: 'キャンドルに贅沢な金箔をあしらい、特別な一品に。記念日やギフトにもおすすめです'
    },
    {
        id: 'glitter',
        name: 'ラメ',
        price: 500,
        description: 'カラフルなラメでキラキラデコレーション',
        icon: '✨',
        detailDescription: 'シルバー、レインボー、パステルカラーなど多彩なラメで、あなただけのキラキラキャンドルに'
    },
    {
        id: 'essential-oil',
        name: 'エッセンシャルオイル',
        price: 500,
        description: 'お好みの香りをプラス',
        icon: '🌸',
        detailDescription: 'ラベンダー、ローズ、オレンジなど人気の香りをセレクト。リラックス効果も期待できます'
    }
];
const BUSINESS_INFO = {
    name: 'iepoyo candle',
    address: '沖縄県宮古島市平良荷川取206-3',
    postalCode: '906-0008',
    phone: '+81-90-1234-5678',
    email: 'candle@iepoyo.com',
    reservationEmail: 'reservation@iepoyo.com',
    adminEmail: 'candle@iepoyo.com',
    hours: {
        open: '10:00',
        close: '18:00',
        lastEntry: '16:30'
    },
    location: {
        lat: 24.795652,
        lng: 125.281194
    },
    // SEO・構造化データ用拡張情報
    seo: {
        description: '宮古島キャンドル手作り体験工房',
        region: '沖縄県',
        locality: '宮古島市',
        streetAddress: '平良荷川取206-3',
        businessHours: {
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],
            opens: '10:00',
            closes: '18:00'
        },
        paymentMethods: [
            'Cash',
            'Credit Card'
        ],
        priceRange: '¥¥',
        serviceArea: '宮古島市'
    }
};
const SOCIAL_MEDIA = [
    {
        platform: 'instagram',
        url: 'https://www.instagram.com/iepoyo.miyako/',
        handle: '@iepoyo.miyako'
    },
    {
        platform: 'line',
        url: 'https://lin.ee/PhCo4lv',
        handle: '@iepoyo_candle'
    }
];
const RESERVATION_CONFIG = {
    maxParticipants: 8,
    minParticipants: 1,
    experienceDuration: 90,
    advanceBookingDays: 30,
    minBookingHours: 24
};
const GOOGLE_CONFIG = {
    mapUrl: 'https://maps.app.goo.gl/WcGx1VcsxKFMzXb38',
    reviewsUrl: 'https://g.page/r/CVj7NUGhcTKnEBM/review',
    businessProfileUrl: 'https://g.page/r/CVj7NUGhcTKnEBM'
};
const getMenuById = (id)=>{
    return EXPERIENCE_MENUS.find((menu)=>menu.id === id);
};
const getOptionById = (id)=>{
    return ADDITIONAL_OPTIONS.find((option)=>option.id === id);
};
const formatPrice = (price)=>{
    return `¥${price.toLocaleString()}`;
};
const calculateTotalPrice = (menuId, optionIds = [])=>{
    const menu = getMenuById(menuId);
    if (!menu) return 0;
    const optionsPrice = optionIds.reduce((total, optionId)=>{
        const option = getOptionById(optionId);
        return total + (option?.price || 0);
    }, 0);
    return menu.price + optionsPrice;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/chatbot/chatbot-data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "chatbotDatabase": (()=>chatbotDatabase),
    "quickResponses": (()=>quickResponses),
    "welcomeMessage": (()=>welcomeMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/master.ts [app-client] (ecmascript)");
;
const chatbotDatabase = {
    greeting: {
        text: 'こんにちは！iepoyo candleへようこそ😊 どんなことをお聞きになりたいですか？',
        type: 'options',
        options: [
            {
                id: 'experience_info',
                text: '体験について知りたい',
                response: 'experience_info'
            },
            {
                id: 'price_info',
                text: '料金を教えて',
                response: 'price_info'
            },
            {
                id: 'access_info',
                text: 'アクセス方法',
                response: 'access_info'
            },
            {
                id: 'reservation_info',
                text: '予約について',
                response: 'reservation_info'
            },
            {
                id: 'weather_info',
                text: '雨の日でも大丈夫？',
                response: 'weather_info'
            },
            {
                id: 'flow_info',
                text: '当日の流れを知りたい',
                response: 'flow_info'
            }
        ]
    },
    experience_info: {
        text: 'キャンドル作り体験について詳しくご説明しますね😊\n\n🕯️ **体験内容**\n・所要時間：約90分\n・対象年齢：6歳以上\n・定員：1〜5名\n・当日お持ち帰りOK\n\n✨ 初心者の方でも安心してお楽しみいただけるよう、スタッフがしっかりサポートします！',
        type: 'options',
        options: [
            {
                id: 'candle_types',
                text: 'どんなキャンドルが作れる？',
                response: 'candle_types'
            },
            {
                id: 'options_info',
                text: 'オプションはある？',
                response: 'options_info'
            },
            {
                id: 'reservation_link',
                text: '予約したい',
                response: 'reservation_link'
            },
            {
                id: 'back_to_menu',
                text: 'メニューに戻る',
                response: 'greeting'
            }
        ]
    },
    candle_types: {
        text: (()=>{
            const menuTexts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPERIENCE_MENUS"].map((menu)=>{
                const emoji = menu.id === 'marble' ? '🌊' : menu.id === 'shell' ? '🐚' : '⭕';
                return `${emoji} **${menu.name}** - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(menu.price)}\n${menu.description.split('。')[0]}`;
            }).join('\n\n');
            return `作れるキャンドルの種類をご紹介します😍\n\n${menuTexts}`;
        })(),
        type: 'options',
        options: [
            {
                id: 'options_info',
                text: 'オプションも知りたい',
                response: 'options_info'
            },
            {
                id: 'reservation_link',
                text: '体験を予約する',
                response: 'reservation_link'
            },
            {
                id: 'back_to_menu',
                text: 'メニューに戻る',
                response: 'greeting'
            }
        ]
    },
    options_info: {
        text: (()=>{
            const optionTexts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADDITIONAL_OPTIONS"].map((option)=>{
                const emoji = option.id === 'glitter' ? '✨' : '🌸';
                return `${emoji} **${option.name}** - +${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(option.price)}\n${option.description}`;
            }).join('\n\n');
            return `オプションで更にかわいくできます💫\n\n${optionTexts}\n\nどちらも人気のオプションです！`;
        })(),
        type: 'options',
        options: [
            {
                id: 'reservation_link',
                text: '予約したい',
                response: 'reservation_link'
            },
            {
                id: 'price_info',
                text: '全体の料金を確認',
                response: 'price_info'
            },
            {
                id: 'back_to_menu',
                text: 'メニューに戻る',
                response: 'greeting'
            }
        ]
    },
    price_info: {
        text: (()=>{
            const menuPrices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPERIENCE_MENUS"].map((menu)=>{
                const emoji = menu.id === 'marble' ? '🌊' : menu.id === 'shell' ? '🐚' : '⭕';
                return `${emoji} ${menu.name}：${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(menu.price)}`;
            }).join('\n');
            const optionPrices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADDITIONAL_OPTIONS"].map((option)=>{
                const emoji = option.id === 'glitter' ? '✨' : '🌸';
                return `${emoji} ${option.name}：+${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(option.price)}`;
            }).join('\n');
            return `料金表をご案内します☺️\n\n**基本料金**\n${menuPrices}\n\n**オプション**\n${optionPrices}`;
        })(),
        type: 'options',
        options: [
            {
                id: 'reservation_link',
                text: '予約する',
                response: 'reservation_link'
            },
            {
                id: 'experience_info',
                text: '体験詳細を知りたい',
                response: 'experience_info'
            },
            {
                id: 'back_to_menu',
                text: 'メニューに戻る',
                response: 'greeting'
            }
        ]
    },
    access_info: {
        text: 'アクセス情報をご案内します😊\n\n📍 **住所**\n〒906-0008 沖縄県宮古島市平良荷川取206-3\n\n🚗 **お車で**\n・宮古空港から約15分\n・平良市街地から約10分\n・無料駐車場5台完備\n\n🚐 **送迎サービス**\n平良市街地のホテルから無料送迎あり（要事前予約）',
        type: 'options',
        options: [
            {
                id: 'map_link',
                text: '地図を見る',
                response: 'map_link'
            },
            {
                id: 'reservation_info',
                text: '予約について',
                response: 'reservation_info'
            },
            {
                id: 'back_to_menu',
                text: 'メニューに戻る',
                response: 'greeting'
            }
        ]
    },
    map_link: {
        text: '詳しい場所はこちらから確認できます！',
        type: 'link',
        link: {
            url: '/access',
            text: 'アクセス詳細ページを見る'
        }
    },
    reservation_info: {
        text: 'ご予約について詳しくご説明します😉\n\n⏰ **営業時間**\n10:00〜18:00（最終受付16:30）\n\n📅 **予約方法**\n事前予約制となっております\n予約ページからご予約をお願いします\n\n🎯 **所要時間**\n約90分\n\n👥 **定員**\n1〜5名',
        type: 'options',
        options: [
            {
                id: 'reservation_link',
                text: '予約ページで予約する',
                response: 'reservation_link'
            },
            {
                id: 'weather_info',
                text: '雨の日でも大丈夫？',
                response: 'weather_info'
            },
            {
                id: 'back_to_menu',
                text: 'メニューに戻る',
                response: 'greeting'
            }
        ]
    },
    reservation_link: {
        text: '公式LINEから予約が可能です！ https://lin.ee/PhCo4lv',
        type: 'link',
        link: {
            url: '/reservation',
            text: '予約ページを開く',
            external: false
        }
    },
    weather_info: {
        text: '雨の日でも安心です😌\n\n🏠 **室内体験**\n屋内での体験のため、雨でも台風でも安心してお楽しみいただけます\n\n🌈 **むしろおすすめ**\n雨の日こそ、ゆっくりとキャンドル作りを楽しむ絶好のチャンス！\n\n📸 **インスタ映え**\n天気に関係なく、素敵な写真が撮れます',
        type: 'options',
        options: [
            {
                id: 'reservation_link',
                text: '予約したい',
                response: 'reservation_link'
            },
            {
                id: 'experience_info',
                text: '体験について詳しく',
                response: 'experience_info'
            },
            {
                id: 'back_to_menu',
                text: 'メニューに戻る',
                response: 'greeting'
            }
        ]
    },
    flow_info: {
        text: '当日の流れをご説明します😄\n\n**1️⃣ 受付（5分）**\n店舗に到着後、受付でお名前をお伝えください\n\n**2️⃣ 説明（10分）**\n作り方とキャンドルの種類を説明します\n\n**3️⃣ 制作（60分）**\nお好きなデザインでキャンドル作り\n\n**4️⃣ 仕上げ（10分）**\nスタッフが最終仕上げをお手伝い\n\n**5️⃣ ラッピング（5分）**\nギフトボックスに入れてお渡し\n\n📸 制作中の写真撮影もOK！',
        type: 'options',
        options: [
            {
                id: 'reservation_link',
                text: '予約したい',
                response: 'reservation_link'
            },
            {
                id: 'access_info',
                text: '場所を確認',
                response: 'access_info'
            },
            {
                id: 'back_to_menu',
                text: 'メニューに戻る',
                response: 'greeting'
            }
        ]
    },
    help: {
        text: '他にもお聞きになりたいことがありましたら、お気軽にお声がけください！\n\n💡 よくあるご質問も準備しておりますので、ぜひご活用ください。',
        type: 'options',
        options: [
            {
                id: 'faq',
                text: 'よくある質問を見る',
                response: 'faq'
            },
            {
                id: 'contact',
                text: '直接お問い合わせ',
                response: 'contact'
            },
            {
                id: 'back_to_menu',
                text: '最初に戻る',
                response: 'greeting'
            }
        ]
    },
    faq: {
        text: 'よくあるご質問をまとめました❓\n\n**Q: 初心者でも大丈夫？**\nA: はい！スタッフがしっかりサポートします\n\n**Q: 体験時間は？**\nA: 約90分です\n\n**Q: 何歳から体験できる？**\nA: 小学生以上から体験いただけます\n\n**Q: 作ったキャンドルはいつ持ち帰れる？**\nA: 体験当日にお持ち帰りいただけます\n\n**Q: 雨の日でも大丈夫？**\nA: はい、屋内体験なので雨天でも安心です\n\n**Q: 予約のキャンセルはできる？**\nA: キャンセルの場合は予約ページ、もしくはreservation@iepoyo.comまでお問い合わせください',
        type: 'options',
        options: [
            {
                id: 'reservation_link',
                text: '予約する',
                response: 'reservation_link'
            },
            {
                id: 'faq_page',
                text: '詳しいFAQを見る',
                response: 'faq_page'
            },
            {
                id: 'back_to_menu',
                text: 'メニューに戻る',
                response: 'greeting'
            }
        ]
    },
    contact: {
        text: 'お問い合わせ方法について💕\n\n私たちとの連絡は、LINEやInstagramからお気軽にどうぞ😊\n**予約ページ**からのご予約も承っております。\n\nお待ちしております✨',
        type: 'options',
        options: [
            {
                id: 'reservation_link',
                text: '予約ページで問い合わせ',
                response: 'reservation_link'
            },
            {
                id: 'back_to_menu',
                text: 'メニューに戻る',
                response: 'greeting'
            }
        ]
    },
    faq_page: {
        text: '詳しいよくある質問ページで、より多くの質問にお答えしています！',
        type: 'link',
        link: {
            url: '/faq',
            text: 'よくある質問ページを見る'
        }
    }
};
const quickResponses = [
    '体験について',
    '料金を知りたい',
    '予約方法',
    '雨の日OK？',
    'アクセス'
];
const welcomeMessage = {
    id: 'welcome',
    text: 'こんにちは！iepoyo candleへようこそ😊 どんなことをお聞きになりたいですか？',
    isBot: true,
    timestamp: new Date(),
    type: 'options',
    options: [
        {
            id: 'experience_info',
            text: '体験について知りたい',
            response: 'experience_info'
        },
        {
            id: 'price_info',
            text: '料金を教えて',
            response: 'price_info'
        },
        {
            id: 'access_info',
            text: 'アクセス方法',
            response: 'access_info'
        },
        {
            id: 'reservation_info',
            text: '予約について',
            response: 'reservation_info'
        },
        {
            id: 'weather_info',
            text: '雨の日でも大丈夫？',
            response: 'weather_info'
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/chatbot/chatbot-utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * チャットボット関連ユーティリティ関数
 * ビジネスロジックと純粋関数を分離
 */ __turbopack_context__.s({
    "createBotMessage": (()=>createBotMessage),
    "createUserMessage": (()=>createUserMessage),
    "extractMessageIds": (()=>extractMessageIds),
    "extractResponseKey": (()=>extractResponseKey),
    "getChatResponse": (()=>getChatResponse),
    "isLatestBotMessage": (()=>isLatestBotMessage),
    "matchQuickResponseKeyword": (()=>matchQuickResponseKeyword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chatbot/chatbot-data.ts [app-client] (ecmascript)");
;
// シンプルなID生成関数
function generateId(prefix, existingIds) {
    let id;
    let attempts = 0;
    do {
        id = `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        attempts++;
    }while (existingIds.includes(id) && attempts < 10)
    if (existingIds.includes(id)) {
        throw new Error('Failed to generate unique ID');
    }
    return id;
}
function getChatResponse(responseKey) {
    // Fail Fast: 無効なキーの場合は即座にnull返却
    if (!responseKey || typeof responseKey !== 'string') {
        return null;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotDatabase"][responseKey] || null;
}
function createUserMessage(text, existingIds) {
    return {
        id: generateId('user', existingIds),
        text,
        isBot: false,
        timestamp: new Date(),
        type: 'text'
    };
}
function createBotMessage(responseKey, existingIds) {
    const responseData = getChatResponse(responseKey);
    if (!responseData) {
        return null;
    }
    return {
        id: generateId('bot', existingIds),
        text: responseData.text,
        isBot: true,
        timestamp: new Date(),
        type: responseData.type || 'text',
        options: responseData.options,
        link: responseData.link
    };
}
function extractResponseKey(option) {
    // 型ガードによる厳密な型チェック
    if (typeof option.response === 'string') {
        return option.response;
    }
    // ChatResponse型の場合は処理しない（設計上想定外）
    if (typeof option.response === 'object' && option.response !== null) {
        console.warn('ChatResponse type not supported in extractResponseKey');
        return null;
    }
    return null;
}
function matchQuickResponseKeyword(text) {
    // Fail Fast: 無効な入力の場合はヘルプを返却
    if (!text || typeof text !== 'string') {
        return 'help';
    }
    const normalizedText = text.toLowerCase().trim();
    // キーワードマッピング（保守性重視）
    const keywordMap = {
        体験: 'experience_info',
        料金: 'price_info',
        予約: 'reservation_info',
        雨: 'weather_info',
        アクセス: 'access_info',
        場所: 'access_info',
        時間: 'flow_info',
        流れ: 'flow_info'
    };
    // 完全一致を優先
    if (keywordMap[normalizedText]) {
        return keywordMap[normalizedText];
    }
    // 部分一致検索
    for (const [keyword, responseKey] of Object.entries(keywordMap)){
        if (normalizedText.includes(keyword)) {
            return responseKey;
        }
    }
    return 'help';
}
function extractMessageIds(messages) {
    return messages.map((message)=>message.id);
}
function isLatestBotMessage(message, index, messages) {
    return message.isBot && index === messages.length - 1 && messages[messages.length - 1]?.isBot;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/chatbot/chatbot-business-logic.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * チャットボットビジネスロジック
 * 複雑な処理を純粋関数として分離
 */ __turbopack_context__.s({
    "handleMessageError": (()=>handleMessageError),
    "processOptionClick": (()=>processOptionClick),
    "processQuickResponse": (()=>processQuickResponse),
    "updateMessages": (()=>updateMessages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chatbot/chatbot-utils.ts [app-client] (ecmascript)");
;
function processOptionClick(option, currentMessages) {
    // 現在のIDリストを取得
    const existingIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMessageIds"])(currentMessages);
    // ユーザーメッセージを作成
    const userMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUserMessage"])(option.text, existingIds);
    // 更新されたIDリスト（ユーザーメッセージ追加後）
    const updatedIds = [
        ...existingIds,
        userMessage.id
    ];
    // レスポンスキーを安全に抽出
    const responseKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractResponseKey"])(option);
    // ボットメッセージを作成（レスポンスキーが無効な場合はnull）
    const botMessage = responseKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBotMessage"])(responseKey, updatedIds) : null;
    // 全IDリスト（ボットメッセージ追加後）
    const allIds = botMessage ? [
        ...updatedIds,
        botMessage.id
    ] : updatedIds;
    return {
        userMessage,
        botMessage,
        allIds
    };
}
function processQuickResponse(text, currentMessages) {
    // キーワードマッチングによるレスポンスキー決定
    const responseKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchQuickResponseKeyword"])(text);
    // オプションオブジェクトを作成
    const option = {
        id: responseKey,
        text: text,
        response: responseKey
    };
    // オプションクリック処理を実行
    const result = processOptionClick(option, currentMessages);
    return {
        option,
        result
    };
}
function updateMessages(currentMessages, userMessage, botMessage) {
    const newMessages = [
        ...currentMessages,
        userMessage
    ];
    if (botMessage) {
        newMessages.push(botMessage);
    }
    return newMessages;
}
function handleMessageError(error, context) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    if ("TURBOPACK compile-time truthy", 1) {
        console.error(`Chatbot error in ${context}:`, errorMessage);
    }
// 本番環境では静的なエラー報告
// 実際のエラー報告サービスに送信する場合はここで実装
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/chatbot/chatbot-hooks.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * チャットボット専用React Hooks
 * Single Responsibility Principleに準拠
 */ __turbopack_context__.s({
    "useModalScrollControl": (()=>useModalScrollControl),
    "useScrollControl": (()=>useScrollControl),
    "useTypingAnimation": (()=>useTypingAnimation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
function useScrollControl() {
    _s();
    const messagesContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const latestBotMessageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 確実なスクロール実行（KISS原則）
    const safeAnimationFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollControl.useCallback[safeAnimationFrame]": (callback)=>{
            requestAnimationFrame({
                "useScrollControl.useCallback[safeAnimationFrame]": ()=>{
                    // 二重保護: コンポーネントがアンマウントされていないかチェック
                    if (messagesContainerRef.current) {
                        callback();
                    }
                }
            }["useScrollControl.useCallback[safeAnimationFrame]"]);
        }
    }["useScrollControl.useCallback[safeAnimationFrame]"], []);
    // 最下部へのスクロール
    const scrollToBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollControl.useCallback[scrollToBottom]": ()=>{
            const container = messagesContainerRef.current;
            if (!container) return;
            safeAnimationFrame({
                "useScrollControl.useCallback[scrollToBottom]": ()=>{
                    container.scrollTo({
                        top: container.scrollHeight,
                        behavior: 'smooth'
                    });
                }
            }["useScrollControl.useCallback[scrollToBottom]"]);
        }
    }["useScrollControl.useCallback[scrollToBottom]"], [
        safeAnimationFrame
    ]);
    // 最新ボットメッセージへのスクロール
    const scrollToLatestBotMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollControl.useCallback[scrollToLatestBotMessage]": ()=>{
            const container = messagesContainerRef.current;
            const target = latestBotMessageRef.current;
            if (!container || !target) return;
            safeAnimationFrame({
                "useScrollControl.useCallback[scrollToLatestBotMessage]": ()=>{
                    const containerRect = container.getBoundingClientRect();
                    const targetRect = target.getBoundingClientRect();
                    const targetTop = targetRect.top - containerRect.top + container.scrollTop;
                    container.scrollTo({
                        top: Math.max(0, targetTop),
                        behavior: 'smooth'
                    });
                }
            }["useScrollControl.useCallback[scrollToLatestBotMessage]"]);
        }
    }["useScrollControl.useCallback[scrollToLatestBotMessage]"], [
        safeAnimationFrame
    ]);
    return {
        messagesContainerRef,
        latestBotMessageRef,
        scrollToBottom,
        scrollToLatestBotMessage
    };
}
_s(useScrollControl, "wN6jfgNdhyfhKwu2Gyf4QUc8X4I=");
function useModalScrollControl(isOpen) {
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useModalScrollControl.useEffect": ()=>{
            if (!isOpen) return;
            // Fail Fast: 即座にボディスクロールを完全停止
            const scrollY = window.scrollY;
            const bodyStyle = document.body.style;
            // 即座に適用（レンダリングタイミング問題を回避）
            bodyStyle.position = 'fixed';
            bodyStyle.top = `-${scrollY}px`;
            bodyStyle.left = '0';
            bodyStyle.right = '0';
            bodyStyle.width = '100%';
            bodyStyle.height = '100%';
            bodyStyle.overflow = 'hidden';
            bodyStyle.touchAction = 'none' // タッチスクロール完全無効化
            ;
            // iOS Safari対策
            document.documentElement.style.overflow = 'hidden';
            return ({
                "useModalScrollControl.useEffect": ()=>{
                    // スクロール位置復元（確実な復元）
                    bodyStyle.position = '';
                    bodyStyle.top = '';
                    bodyStyle.left = '';
                    bodyStyle.right = '';
                    bodyStyle.width = '';
                    bodyStyle.height = '';
                    bodyStyle.overflow = '';
                    bodyStyle.touchAction = '';
                    document.documentElement.style.overflow = '';
                    // スクロール位置復元（確実に実行）
                    requestAnimationFrame({
                        "useModalScrollControl.useEffect": ()=>{
                            window.scrollTo(0, scrollY);
                        }
                    }["useModalScrollControl.useEffect"]);
                }
            })["useModalScrollControl.useEffect"];
        }
    }["useModalScrollControl.useEffect"], [
        isOpen
    ]);
}
_s1(useModalScrollControl, "OD7bBpZva5O2jO+Puf00hKivP7c=");
function useTypingAnimation() {
    _s2();
    const typingTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const startTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTypingAnimation.useCallback[startTyping]": (callback, delay = 1000)=>{
            // 既存のタイマーをクリア（重複実行防止）
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
            typingTimeoutRef.current = setTimeout(callback, delay);
        }
    }["useTypingAnimation.useCallback[startTyping]"], []);
    const stopTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTypingAnimation.useCallback[stopTyping]": ()=>{
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
                typingTimeoutRef.current = undefined;
            }
        }
    }["useTypingAnimation.useCallback[stopTyping]"], []);
    // クリーンアップ
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTypingAnimation.useEffect": ()=>{
            return stopTyping;
        }
    }["useTypingAnimation.useEffect"], [
        stopTyping
    ]);
    return {
        startTyping,
        stopTyping
    };
}
_s2(useTypingAnimation, "xNVKJgNUhBMkjot5erpgnsD5Ub0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/chatbot/message-renderer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * メッセージレンダリング専用コンポーネント
 * Single Responsibility Principleに準拠
 */ __turbopack_context__.s({
    "MessageRenderer": (()=>MessageRenderer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
/**
 * メッセージオプションボタン群
 */ function MessageOptions({ options, onOptionClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3 space-y-2",
        children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onOptionClick(option),
                className: "block w-full rounded-md bg-white/20 px-3 py-2 text-left text-xs transition-colors duration-200 hover:bg-white/30",
                children: option.text
            }, option.id, false, {
                fileName: "[project]/src/components/chatbot/message-renderer.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/chatbot/message-renderer.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = MessageOptions;
/**
 * メッセージリンクボタン
 */ function MessageLink({ link, onLinkClick }) {
    const linkClass = 'inline-block rounded-md bg-white/20 px-3 py-2 text-xs transition-colors duration-200 hover:bg-white/30';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3",
        children: link.external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: link.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: linkClass,
            children: [
                link.text,
                " 🔗"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chatbot/message-renderer.tsx",
            lineNumber: 62,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: link.url,
            className: linkClass,
            onClick: onLinkClick,
            children: link.text
        }, void 0, false, {
            fileName: "[project]/src/components/chatbot/message-renderer.tsx",
            lineNumber: 71,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/chatbot/message-renderer.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c1 = MessageLink;
/**
 * メッセージコンテンツ
 */ function MessageContent({ message, onOptionClick, onLinkClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `max-w-xs rounded-lg px-4 py-2 lg:max-w-md ${message.isBot ? 'bg-miyako-blue text-white' : 'bg-soft-pink text-gray-800'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm whitespace-pre-line",
                children: message.text
            }, void 0, false, {
                fileName: "[project]/src/components/chatbot/message-renderer.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            message.options && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageOptions, {
                options: message.options,
                onOptionClick: onOptionClick
            }, void 0, false, {
                fileName: "[project]/src/components/chatbot/message-renderer.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            message.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageLink, {
                link: message.link,
                onLinkClick: onLinkClick
            }, void 0, false, {
                fileName: "[project]/src/components/chatbot/message-renderer.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs opacity-70",
                children: message.timestamp.toLocaleTimeString('ja-JP', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            }, void 0, false, {
                fileName: "[project]/src/components/chatbot/message-renderer.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/chatbot/message-renderer.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c2 = MessageContent;
function MessageRenderer({ message, onOptionClick, onLinkClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageContent, {
            message: message,
            onOptionClick: onOptionClick,
            onLinkClick: onLinkClick
        }, void 0, false, {
            fileName: "[project]/src/components/chatbot/message-renderer.tsx",
            lineNumber: 134,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/chatbot/message-renderer.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_c3 = MessageRenderer;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "MessageOptions");
__turbopack_context__.k.register(_c1, "MessageLink");
__turbopack_context__.k.register(_c2, "MessageContent");
__turbopack_context__.k.register(_c3, "MessageRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/chatbot/chatbot.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Chatbot": (()=>Chatbot)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$business$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chatbot/chatbot-business-logic.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chatbot/chatbot-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chatbot/chatbot-hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chatbot/chatbot-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$message$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chatbot/message-renderer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Chatbot() {
    _s();
    // === State Management ===
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // === Custom Hooks（関心の分離）===
    const { messagesContainerRef, latestBotMessageRef, scrollToBottom, scrollToLatestBotMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollControl"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalScrollControl"])(isOpen);
    const { startTyping, stopTyping } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypingAnimation"])();
    // === Event Handlers（ビジネスロジック分離）===
    /**
   * チャットモーダルを閉じる
   * 単一責任: モーダル状態管理のみ
   */ const handleCloseChat = ()=>{
        setIsOpen(false);
        stopTyping() // タイピングアニメーション停止
        ;
    };
    /**
   * オプションクリック処理
   * ビジネスロジックは別モジュールに委譲
   */ const handleOptionClick = async (option)=>{
        try {
            // ビジネスロジック実行
            const { userMessage, botMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$business$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processOptionClick"])(option, messages);
            // ユーザーメッセージを即座に追加
            const updatedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$business$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessages"])(messages, userMessage);
            setMessages(updatedMessages);
            // ボットメッセージがある場合の処理
            if (botMessage) {
                setIsTyping(true);
                // タイピングアニメーション（1秒後にボットメッセージ表示）
                startTyping(()=>{
                    const finalMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$business$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessages"])(updatedMessages, botMessage);
                    setMessages(finalMessages);
                    setIsTyping(false);
                    // ボットメッセージ追加後、少し遅れてスクロール調整
                    setTimeout(()=>{
                        scrollToLatestBotMessage();
                    }, 100);
                });
            }
            // 即座にスクロール（ユーザーメッセージ表示後）
            setTimeout(scrollToBottom, 50);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$business$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleMessageError"])(error, 'handleOptionClick');
            setIsTyping(false);
        }
    };
    /**
   * クイックレスポンス処理
   * キーワードベースの自動応答
   */ const handleQuickResponse = async (text)=>{
        try {
            // ビジネスロジック実行
            const { result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$business$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processQuickResponse"])(text, messages);
            const { userMessage, botMessage } = result;
            // ユーザーメッセージを即座に追加
            const updatedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$business$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessages"])(messages, userMessage);
            setMessages(updatedMessages);
            // ボットメッセージがある場合の処理
            if (botMessage) {
                setIsTyping(true);
                startTyping(()=>{
                    const finalMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$business$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessages"])(updatedMessages, botMessage);
                    setMessages(finalMessages);
                    setIsTyping(false);
                    setTimeout(()=>{
                        scrollToLatestBotMessage();
                    }, 100);
                });
            }
            setTimeout(scrollToBottom, 50);
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$business$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleMessageError"])(error, 'handleQuickResponse');
            setIsTyping(false);
        }
    };
    // === メッセージレンダリング関数 ===
    /**
   * 個別メッセージレンダリング
   * 複雑性を専用コンポーネントに委譲
   */ const renderMessage = (message, index)=>{
        const isLatest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLatestBotMessage"])(message, index, messages);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: isLatest ? latestBotMessageRef : undefined,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$message$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageRenderer"], {
                message: message,
                onOptionClick: handleOptionClick,
                onLinkClick: handleCloseChat
            }, void 0, false, {
                fileName: "[project]/src/components/chatbot/chatbot.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        }, message.id, false, {
            fileName: "[project]/src/components/chatbot/chatbot.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this);
    };
    // === JSX Return（レンダリング責任のみ）===
    // メッセージ変更時の自動スクロール
    // useScrollControlで管理されるため、ここでは利用のみ
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            scrollToBottom();
        }
    }["Chatbot.useEffect"], [
        messages,
        scrollToBottom
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "from-miyako-blue to-soft-pink pointer-events-none absolute inset-0 animate-pulse rounded-full bg-gradient-to-r opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chatbot/chatbot.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "from-miyako-blue to-soft-pink relative z-10 block flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r text-white shadow-lg transition-transform duration-300 hover:scale-110 md:h-14 md:w-14",
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl",
                            children: "💬"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chatbot/chatbot.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/chatbot/chatbot.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chatbot/chatbot.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "fixed inset-0 z-[9998] bg-black/20 backdrop-blur-sm",
                            onClick: handleCloseChat
                        }, void 0, false, {
                            fileName: "[project]/src/components/chatbot/chatbot.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 100,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: 100,
                                scale: 0.9
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "fixed inset-x-4 top-16 bottom-4 z-[9999] md:top-1/2 md:left-1/2 md:h-[600px] md:w-96 md:-translate-x-1/2 md:-translate-y-1/2",
                            onClick: (e)=>e.stopPropagation(),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "flex h-full w-full flex-col overflow-hidden border-0 bg-white/95 shadow-xl backdrop-blur-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "from-miyako-blue to-soft-pink shrink-0 bg-gradient-to-r p-4 text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                children: "🕯️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-sm font-bold",
                                                                    children: "iepoyo candle"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs opacity-90",
                                                                    children: "お気軽にお聞きください！"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleCloseChat,
                                                    className: "flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors duration-200 hover:bg-white/30",
                                                    "aria-label": "チャットを閉じる",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "h-4 w-4 text-white",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M6 18L18 6M6 6l12 12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messagesContainerRef,
                                        className: "min-h-0 flex-1 space-y-2 overflow-y-auto overscroll-contain p-4",
                                        style: {
                                            // 確実なスクロール制御（iOS Safari対策）
                                            WebkitOverflowScrolling: 'touch',
                                            touchAction: 'pan-y',
                                            overscrollBehavior: 'contain',
                                            scrollbarWidth: 'thin'
                                        },
                                        children: [
                                            messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4 flex justify-start",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-miyako-blue max-w-xs rounded-lg px-4 py-2 text-white lg:max-w-md",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm whitespace-pre-line",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["welcomeMessage"].text
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mb-3 text-center text-sm text-gray-600",
                                                                children: "よくあるご質問はこちら👇"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 25
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["welcomeMessage"].options?.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleOptionClick(option),
                                                                    className: "from-miyako-blue/10 to-soft-pink/10 hover:from-miyako-blue/20 hover:to-soft-pink/20 border-miyako-blue/20 block w-full rounded-lg border bg-gradient-to-r px-4 py-3 text-left text-sm font-medium text-gray-700 transition-all duration-200",
                                                                    children: option.text
                                                                }, option.id, false, {
                                                                    fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 27
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                lineNumber: 250,
                                                columnNumber: 21
                                            }, this),
                                            messages.map(renderMessage),
                                            isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4 flex justify-start",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-miyako-blue max-w-xs rounded-lg px-4 py-2 text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex space-x-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-2 animate-bounce rounded-full bg-white",
                                                                style: {
                                                                    animationDelay: '0ms'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-2 animate-bounce rounded-full bg-white",
                                                                style: {
                                                                    animationDelay: '150ms'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-2 animate-bounce rounded-full bg-white",
                                                                style: {
                                                                    animationDelay: '300ms'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                lineNumber: 281,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shrink-0 border-t border-gray-200 p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                '体験について',
                                                '料金',
                                                '予約方法',
                                                '雨の日OK？'
                                            ].map((text)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleQuickResponse(text),
                                                    className: "rounded-full bg-gray-100 px-3 py-1 text-xs transition-colors duration-200 hover:bg-gray-200",
                                                    children: text
                                                }, text, false, {
                                                    fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                            lineNumber: 306,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chatbot/chatbot.tsx",
                                lineNumber: 197,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chatbot/chatbot.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/chatbot/chatbot.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Chatbot, "esjw3jdpjRFiUhLE+9YNTJY4iJo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollControl"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalScrollControl"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2d$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypingAnimation"]
    ];
});
_c = Chatbot;
var _c;
__turbopack_context__.k.register(_c, "Chatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/icons/icon-instagram.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconInstagram": (()=>IconInstagram)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function IconInstagram({ size = 24, className = '', color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
            fill: color
        }, void 0, false, {
            fileName: "[project]/src/components/icons/icon-instagram.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/icon-instagram.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = IconInstagram;
var _c;
__turbopack_context__.k.register(_c, "IconInstagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/icons/icon-line.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconLine": (()=>IconLine)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function IconLine({ size = 24, className = '', color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314",
            fill: color
        }, void 0, false, {
            fileName: "[project]/src/components/icons/icon-line.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/icon-line.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = IconLine;
var _c;
__turbopack_context__.k.register(_c, "IconLine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/social/floating-social-bar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FloatingSocialBar": (()=>FloatingSocialBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chatbot/chatbot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$icon$2d$instagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/icon-instagram.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$icon$2d$line$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/icon-line.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const socialLinks = [
    {
        id: 'instagram',
        name: 'Instagram',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$icon$2d$instagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconInstagram"],
        url: 'https://www.instagram.com/iepoyo.miyako/',
        gradient: 'from-purple-500 via-pink-500 to-orange-500',
        color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500',
        message: 'フォローで最新情報をチェック！'
    },
    {
        id: 'line',
        name: 'LINE',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$icon$2d$line$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLine"],
        url: 'https://lin.ee/PhCo4lv',
        color: 'bg-green-500',
        message: 'LINE公式アカウントでお問い合わせ'
    }
];
function FloatingSocialBar() {
    _s();
    const [hoveredId, setHoveredId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-6 bottom-6 z-40 hidden space-y-4 md:block",
                children: [
                    socialLinks.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative",
                            onMouseEnter: ()=>setHoveredId(social.id),
                            onMouseLeave: ()=>setHoveredId(null),
                            children: [
                                hoveredId === social.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-in fade-in slide-in-from-right-2 absolute top-1/2 right-full mr-4 -translate-y-1/2 whitespace-nowrap duration-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-gray-900 px-4 py-2 text-sm text-white shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold",
                                                children: social.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/social/floating-social-bar.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs opacity-90",
                                                children: social.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/social/floating-social-bar.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-1/2 right-0 h-0 w-0 translate-x-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-gray-900"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/social/floating-social-bar.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/social/floating-social-bar.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/social/floating-social-bar.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute inset-0 rounded-full ${social.color} pointer-events-none animate-pulse opacity-30`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/social/floating-social-bar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: social.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: `relative block h-14 w-14 rounded-full ${social.color} z-10 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(social.icon, {
                                        size: 28,
                                        color: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/social/floating-social-bar.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/social/floating-social-bar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, social.id, true, {
                            fileName: "[project]/src/components/social/floating-social-bar.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chatbot"], {}, void 0, false, {
                            fileName: "[project]/src/components/social/floating-social-bar.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/social/floating-social-bar.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/social/floating-social-bar.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-4 bottom-6 z-40 space-y-4 md:hidden",
                children: [
                    socialLinks.map((social, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-in fade-in slide-in-from-right-8 relative duration-300",
                            style: {
                                animationDelay: `${index * 100}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute inset-0 rounded-full ${social.color} pointer-events-none animate-pulse opacity-30`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/social/floating-social-bar.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: social.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: `relative block h-12 w-12 rounded-full ${social.color} z-10 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(social.icon, {
                                        size: 24,
                                        color: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/social/floating-social-bar.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/social/floating-social-bar.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, social.id, true, {
                            fileName: "[project]/src/components/social/floating-social-bar.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chatbot$2f$chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chatbot"], {}, void 0, false, {
                            fileName: "[project]/src/components/social/floating-social-bar.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/social/floating-social-bar.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/social/floating-social-bar.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(FloatingSocialBar, "W+Gi/GY1c+T76G87axG09SVXkEc=");
_c = FloatingSocialBar;
var _c;
__turbopack_context__.k.register(_c, "FloatingSocialBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Footer": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    const footerSections = [
        {
            title: 'サービス',
            links: [
                {
                    href: '/experience',
                    label: 'キャンドル体験'
                },
                {
                    href: '/gallery',
                    label: 'ギャラリー'
                },
                {
                    href: '/reservation',
                    label: 'ご予約'
                }
            ]
        },
        {
            title: '店舗情報',
            links: [
                {
                    href: '/access',
                    label: 'アクセス'
                },
                {
                    href: '/access#contact',
                    label: 'お問い合わせ'
                },
                {
                    href: '/access#hours',
                    label: '営業時間'
                },
                {
                    href: '/faq',
                    label: 'よくある質問'
                }
            ]
        },
        {
            title: 'SNS',
            links: [
                {
                    href: 'https://www.instagram.com/iepoyo.miyako/',
                    label: 'Instagram'
                },
                {
                    href: 'https://lin.ee/PhCo4lv',
                    label: 'LINE'
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: 'linear-gradient(to right, #D9D9FF, #FCE6F6)',
            color: '#1F2937',
            marginTop: 'auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '3rem 1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '2rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'linear-gradient(to right, #4FC3E7, #F4C2C1)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            marginBottom: '1rem'
                                        },
                                        children: "iepoyo candle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '0.875rem',
                                            lineHeight: '1.6',
                                            color: '#6B7280',
                                            marginBottom: '1rem'
                                        },
                                        children: "宮古島の美しい海をイメージしたゆめかわいキャンドル作り体験で、 特別な思い出を作りませんか。"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.875rem',
                                            color: '#6B7280'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "📍 〒906-0008",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                "沖縄県宮古島市平良荷川取206-3"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/footer.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            footerSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontWeight: '600',
                                                color: '#1F2937',
                                                marginBottom: '1rem'
                                            },
                                            children: section.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            style: {
                                                listStyle: 'none',
                                                padding: 0,
                                                margin: 0,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0.5rem'
                                            },
                                            children: section.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: link.href.startsWith('http') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: link.href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        style: {
                                                            fontSize: '0.875rem',
                                                            color: '#6B7280',
                                                            textDecoration: 'none',
                                                            transition: 'color 0.2s'
                                                        },
                                                        onMouseOver: (e)=>{
                                                            e.currentTarget.style.color = '#4FC3E7';
                                                        },
                                                        onMouseOut: (e)=>{
                                                            e.currentTarget.style.color = '#6B7280';
                                                        },
                                                        children: link.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: link.href,
                                                        style: {
                                                            fontSize: '0.875rem',
                                                            color: '#6B7280',
                                                            textDecoration: 'none',
                                                            transition: 'color 0.2s'
                                                        },
                                                        onMouseOver: (e)=>{
                                                            e.currentTarget.style.color = '#4FC3E7';
                                                        },
                                                        onMouseOut: (e)=>{
                                                            e.currentTarget.style.color = '#6B7280';
                                                        },
                                                        children: link.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 23
                                                    }, this)
                                                }, link.href, false, {
                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, section.title, true, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/footer.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '2rem',
                            borderTop: '1px solid rgba(156, 163, 175, 0.3)',
                            paddingTop: '2rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '1rem'
                            },
                            className: "footer-bottom",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '0.875rem',
                                        color: '#6B7280',
                                        margin: 0
                                    },
                                    children: [
                                        "© ",
                                        currentYear,
                                        " iepoyo candle. All rights reserved."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1.5rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.875rem',
                                            color: '#9CA3AF'
                                        },
                                        children: "#宮古島キャンドル #miyakocandle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/footer.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/footer.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
          @media (min-width: 768px) {
            .footer-bottom {
              flex-direction: row !important;
            }
          }
        `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/footer.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/footer.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
};
_c = Footer;
;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/image-optimization.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * 画像最適化ユーティリティ
 * Cloudflare Images連携とレスポンシブ対応
 */ __turbopack_context__.s({
    "generateImageVariants": (()=>generateImageVariants),
    "getCardImageConfig": (()=>getCardImageConfig),
    "getCloudflareImageUrl": (()=>getCloudflareImageUrl),
    "getHeroImageConfig": (()=>getHeroImageConfig),
    "getIconImageConfig": (()=>getIconImageConfig),
    "getLCPOptimizedConfig": (()=>getLCPOptimizedConfig),
    "getLazyLoadingConfig": (()=>getLazyLoadingConfig),
    "getResponsiveSizes": (()=>getResponsiveSizes),
    "getThumbnailImageConfig": (()=>getThumbnailImageConfig)
});
function getCloudflareImageUrl(imageId, options = {}) {
    // 既にフルURLの場合は、パラメータを追加
    if (imageId.startsWith('https://imagedelivery.net/')) {
        const url = new URL(imageId);
        const pathParts = url.pathname.split('/');
        if (pathParts.length >= 4) {
            // 既存のvariant（末尾）を置き換え
            pathParts.pop();
            const baseUrl = `${url.origin}${pathParts.join('/')}`;
            return `${baseUrl}/${buildCloudflareVariant(options)}`;
        }
    }
    // 新しいURL構築
    const accountHash = 'NvrRuadp8jbz6w1RVQvxOg' // 既存のアカウントハッシュ
    ;
    const variant = buildCloudflareVariant(options);
    return `https://imagedelivery.net/${accountHash}/${imageId}/${variant}`;
}
/**
 * Cloudflareのvariant文字列を構築
 */ function buildCloudflareVariant(options) {
    const params = [];
    if (options.width) params.push(`w=${options.width}`);
    if (options.height) params.push(`h=${options.height}`);
    if (options.quality) params.push(`q=${options.quality}`);
    if (options.format) params.push(`f=${options.format}`);
    if (options.fit) params.push(`fit=${options.fit}`);
    if (options.gravity) params.push(`gravity=${options.gravity}`);
    if (options.blur) params.push(`blur=${options.blur}`);
    if (options.brightness) params.push(`brightness=${options.brightness}`);
    if (options.contrast) params.push(`contrast=${options.contrast}`);
    if (options.gamma) params.push(`gamma=${options.gamma}`);
    if (options.sharpen) params.push(`sharpen=${options.sharpen}`);
    return params.length > 0 ? params.join(',') : 'public';
}
function getResponsiveSizes(breakpoints) {
    const sizes = [];
    if (breakpoints.mobile) {
        sizes.push(`(max-width: 640px) ${breakpoints.mobile}`);
    }
    if (breakpoints.tablet) {
        sizes.push(`(max-width: 1024px) ${breakpoints.tablet}`);
    }
    if (breakpoints.desktop) {
        sizes.push(`(max-width: 1920px) ${breakpoints.desktop}`);
    }
    sizes.push(breakpoints.default);
    return sizes.join(', ');
}
function generateImageVariants(imageId, variants) {
    // デフォルト画像
    const defaultSrc = getCloudflareImageUrl(imageId, {
        width: variants[0]?.width || 800,
        quality: 85,
        format: 'webp',
        fit: 'cover'
    });
    // srcSet生成
    const srcSetEntries = variants.map((variant)=>{
        const url = getCloudflareImageUrl(imageId, {
            width: variant.width,
            height: variant.height,
            quality: variant.quality || 85,
            format: variant.format || 'webp',
            fit: 'cover'
        });
        return `${url} ${variant.width}w`;
    });
    // sizes生成（一般的なブレークポイント）
    const sizes = getResponsiveSizes({
        mobile: '100vw',
        tablet: '50vw',
        desktop: '33vw',
        default: '400px'
    });
    return {
        src: defaultSrc,
        srcSet: srcSetEntries.join(', '),
        sizes
    };
}
function getHeroImageConfig(imageId) {
    return generateImageVariants(imageId, [
        {
            width: 375,
            quality: 80,
            format: 'webp'
        },
        {
            width: 768,
            quality: 85,
            format: 'webp'
        },
        {
            width: 1280,
            quality: 90,
            format: 'webp'
        },
        {
            width: 1920,
            quality: 95,
            format: 'webp'
        }
    ]);
}
function getCardImageConfig(imageId) {
    return generateImageVariants(imageId, [
        {
            width: 300,
            quality: 80,
            format: 'webp'
        },
        {
            width: 400,
            quality: 85,
            format: 'webp'
        },
        {
            width: 500,
            quality: 90,
            format: 'webp'
        }
    ]);
}
function getThumbnailImageConfig(imageId) {
    return generateImageVariants(imageId, [
        {
            width: 64,
            quality: 75,
            format: 'webp'
        },
        {
            width: 128,
            quality: 80,
            format: 'webp'
        },
        {
            width: 256,
            quality: 85,
            format: 'webp'
        }
    ]);
}
function getIconImageConfig(imagePath, size = 40) {
    return {
        src: imagePath,
        width: size,
        height: size
    };
}
function getLazyLoadingConfig(priority = false) {
    return {
        loading: priority ? 'eager' : 'lazy',
        priority
    };
}
function getLCPOptimizedConfig() {
    return {
        priority: true,
        loading: 'eager',
        fetchPriority: 'high'
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/optimized-image.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * 最適化画像コンポーネント
 * Cloudflare Images対応・レスポンシブ・LCP最適化
 */ __turbopack_context__.s({
    "CardImage": (()=>CardImage),
    "HeroImage": (()=>HeroImage),
    "IconImage": (()=>IconImage),
    "OptimizedImage": (()=>OptimizedImage),
    "ThumbnailImage": (()=>ThumbnailImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/image-optimization.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
/**
 * 最適化画像コンポーネント
 */ const OptimizedImage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ src, alt, preset = 'card', cloudflareOptions = {}, isLCPImage = false, customSizes, className, width, height, ...props }, ref)=>{
    // Cloudflare Images URLの場合の処理
    if (src.includes('imagedelivery.net')) {
        // プリセット別の設定適用
        let imageConfig;
        switch(preset){
            case 'hero':
                imageConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHeroImageConfig"])(src);
                break;
            case 'card':
                imageConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardImageConfig"])(src);
                break;
            case 'thumbnail':
                imageConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThumbnailImageConfig"])(src);
                break;
            case 'icon':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ref: ref,
                    src: src,
                    alt: alt,
                    width: width || 40,
                    height: height || 40,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('object-cover', className),
                    ...isLCPImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLCPOptimizedConfig"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLazyLoadingConfig"])(),
                    ...props
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/optimized-image.tsx",
                    lineNumber: 69,
                    columnNumber: 13
                }, this);
            default:
                imageConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardImageConfig"])(src);
        }
        // カスタムオプションがある場合は適用
        const optimizedSrc = Object.keys(cloudflareOptions).length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCloudflareImageUrl"])(src, cloudflareOptions) : imageConfig.src;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref: ref,
            src: optimizedSrc,
            alt: alt,
            width: width,
            height: height,
            sizes: customSizes || imageConfig.sizes,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('object-cover', className),
            ...isLCPImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLCPOptimizedConfig"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLazyLoadingConfig"])(),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/optimized-image.tsx",
            lineNumber: 93,
            columnNumber: 9
        }, this);
    }
    // 静的画像（ロゴなど）の場合
    if (src.startsWith('/') || src.startsWith('./')) {
        const iconConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIconImageConfig"])(src, width || 40);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref: ref,
            src: iconConfig.src,
            alt: alt,
            width: iconConfig.width,
            height: iconConfig.height,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('object-cover', className),
            ...isLCPImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLCPOptimizedConfig"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLazyLoadingConfig"])(),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/optimized-image.tsx",
            lineNumber: 112,
            columnNumber: 9
        }, this);
    }
    // その他の場合は通常のNext.js Imageコンポーネント
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        src: src,
        alt: alt,
        width: width,
        height: height,
        sizes: customSizes,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('object-cover', className),
        ...isLCPImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLCPOptimizedConfig"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$image$2d$optimization$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLazyLoadingConfig"])(),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/optimized-image.tsx",
        lineNumber: 127,
        columnNumber: 7
    }, this);
});
_c = OptimizedImage;
OptimizedImage.displayName = 'OptimizedImage';
;
const HeroImage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptimizedImage, {
        ref: ref,
        preset: "hero",
        isLCPImage: true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-full w-full', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/optimized-image.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this));
_c2 = HeroImage;
HeroImage.displayName = 'HeroImage';
const CardImage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c3 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptimizedImage, {
        ref: ref,
        preset: "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('aspect-square', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/optimized-image.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this));
_c4 = CardImage;
CardImage.displayName = 'CardImage';
const ThumbnailImage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptimizedImage, {
        ref: ref,
        preset: "thumbnail",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-16 w-16 rounded-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/optimized-image.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this));
_c6 = ThumbnailImage;
ThumbnailImage.displayName = 'ThumbnailImage';
const IconImage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptimizedImage, {
        ref: ref,
        preset: "icon",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('object-contain', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/optimized-image.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this));
_c8 = IconImage;
IconImage.displayName = 'IconImage';
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "OptimizedImage");
__turbopack_context__.k.register(_c1, "HeroImage$forwardRef");
__turbopack_context__.k.register(_c2, "HeroImage");
__turbopack_context__.k.register(_c3, "CardImage$forwardRef");
__turbopack_context__.k.register(_c4, "CardImage");
__turbopack_context__.k.register(_c5, "ThumbnailImage$forwardRef");
__turbopack_context__.k.register(_c6, "ThumbnailImage");
__turbopack_context__.k.register(_c7, "IconImage$forwardRef");
__turbopack_context__.k.register(_c8, "IconImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Header": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$optimized$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/optimized-image.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Header = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            href: '/',
            label: 'ホーム'
        },
        {
            href: '/experience',
            label: '体験メニュー'
        },
        {
            href: '/gallery',
            label: 'ギャラリー'
        },
        {
            href: '/access',
            label: 'アクセス'
        },
        {
            href: '/faq',
            label: 'よくある質問'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            backgroundColor: 'rgba(255, 247, 250, 0.95)',
            borderBottom: '1px solid rgba(244, 194, 193, 0.2)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 50
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '400px',
                    margin: '0 auto',
                    padding: '0 16px',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            height: '4rem',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    textDecoration: 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            transition: 'transform 0.2s'
                                        },
                                        onMouseOver: (e)=>{
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        },
                                        onMouseOut: (e)=>{
                                            e.currentTarget.style.transform = 'scale(1)';
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$optimized$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconImage"], {
                                            src: "/logo-sm.png",
                                            alt: "iepoyo candle ロゴ",
                                            width: 40,
                                            height: 40
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'linear-gradient(to right, #4FC3E7, #F4C2C1)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            fontSize: '1.25rem',
                                            fontWeight: 'bold',
                                            transition: 'transform 0.2s',
                                            whiteSpace: 'nowrap'
                                        },
                                        onMouseOver: (e)=>{
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        },
                                        onMouseOut: (e)=>{
                                            e.currentTarget.style.transform = 'scale(1)';
                                        },
                                        children: "iepoyo candle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                style: {
                                    display: 'block',
                                    alignItems: 'center',
                                    gap: '2rem'
                                },
                                className: "desktop-nav",
                                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        style: {
                                            fontWeight: '500',
                                            color: '#374151',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s'
                                        },
                                        onMouseOver: (e)=>{
                                            e.currentTarget.style.color = '#4FC3E7';
                                        },
                                        onMouseOut: (e)=>{
                                            e.currentTarget.style.color = '#374151';
                                        },
                                        children: item.label
                                    }, item.href, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    display: 'block',
                                    background: 'transparent',
                                    border: 'none',
                                    padding: '0.5rem',
                                    cursor: 'pointer',
                                    minWidth: '44px',
                                    minHeight: '44px'
                                },
                                className: "mobile-menu-button",
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                "aria-label": "メニューを開く",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    style: {
                                        width: '24px',
                                        height: '24px'
                                    },
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxHeight: isMenuOpen ? '100vh' : '0',
                            overflow: isMenuOpen ? 'auto' : 'hidden',
                            transition: 'max-height 0.3s ease-in-out',
                            backgroundColor: 'rgba(255, 247, 250, 0.98)',
                            borderTop: '1px solid rgba(244, 194, 193, 0.3)',
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            zIndex: 40,
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                        },
                        className: "mobile-menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            style: {
                                padding: '16px 0',
                                minHeight: 'fit-content'
                            },
                            children: [
                                navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        style: {
                                            display: 'block',
                                            padding: '14px 20px',
                                            color: '#374151',
                                            textDecoration: 'none',
                                            fontSize: '16px',
                                            borderBottom: '1px solid rgba(244, 194, 193, 0.1)',
                                            transition: 'background-color 0.2s'
                                        },
                                        onMouseOver: (e)=>{
                                            e.currentTarget.style.backgroundColor = 'rgba(79, 195, 231, 0.05)';
                                        },
                                        onMouseOut: (e)=>{
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                        },
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: item.label
                                    }, item.href, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '16px 20px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/reservation",
                                        style: {
                                            background: 'linear-gradient(to right, #4FC3E7, #F4C2C1)',
                                            color: 'white',
                                            padding: '14px 24px',
                                            borderRadius: '25px',
                                            textDecoration: 'none',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            display: 'block',
                                            textAlign: 'center',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                                            transition: 'all 0.2s'
                                        },
                                        onMouseOver: (e)=>{
                                            e.currentTarget.style.transform = 'scale(1.02)';
                                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
                                        },
                                        onMouseOut: (e)=>{
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
                                        },
                                        onClick: ()=>setIsMenuOpen(false),
                                        children: "今すぐ予約"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
          /* デスクトップ: 768px以上 */
          @media (min-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .desktop-cta {
              display: block !important;
            }
            .mobile-menu-button {
              display: block !important;
            }
            .mobile-menu {
              display: block !important;
            }
          }

          /* モバイル: 767px以下 */
          @media (max-width: 767px) {
            .desktop-nav {
              display: none !important;
            }
            .desktop-cta {
              display: none !important;
            }
            .mobile-menu-button {
              display: block !important;
            }
            .mobile-menu {
              display: block !important;
            }
          }
        `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/header.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
_s(Header, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Header;
;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/link-button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LinkButton": (()=>LinkButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function LinkButton({ href, children, className = '', style = {}, variant = 'default', 'data-testid': testId }) {
    // variant-based styles (Buttonコンポーネントと統一)
    const variantStyles = {
        default: {},
        primary: {
            backgroundColor: '#4FC3E7',
            color: 'white'
        },
        secondary: {
            backgroundColor: '#F4C2C1',
            color: '#333'
        }
    };
    const currentVariantStyle = variantStyles[variant] || variantStyles.default;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: className,
        style: {
            display: 'inline-block',
            padding: '12px 24px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            ...currentVariantStyle,
            ...style
        },
        "data-testid": testId,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/link-button.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = LinkButton;
var _c;
__turbopack_context__.k.register(_c, "LinkButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/experience-menu-section.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ExperienceMenuSection": (()=>ExperienceMenuSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/master.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$link$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/link-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$optimized$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/optimized-image.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const ExperienceMenuSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-cream-white py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-in fade-in slide-in-from-top-6 mb-16 text-center duration-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "animate-in fade-in zoom-in-95 relative mb-6 text-4xl font-bold delay-200 duration-600 md:text-5xl lg:text-6xl",
                            style: {
                                color: 'oklch(.753 .124 212.53)'
                            },
                            children: "宮古島キャンドル手作り体験メニュー✨"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "animate-in fade-in mx-auto max-w-2xl text-lg leading-relaxed font-medium text-gray-700 delay-400 duration-600 md:text-xl",
                            children: [
                                "宮古島観光の新定番！雨の日・台風でも安心の室内手作り体験。",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                    className: "hidden sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                "記念日にぴったりの宮古島体験です。"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-none bg-white/90 p-4 shadow-xl backdrop-blur-sm sm:p-6 md:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-6 text-center text-2xl font-bold md:text-3xl",
                                style: {
                                    color: 'oklch(.753 .124 212.53)'
                                },
                                children: "体験メニュー"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 md:mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full overflow-hidden rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-[4/3] sm:aspect-video",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "https://imagedelivery.net/NvrRuadp8jbz6w1RVQvxOg/386e5c1f-7841-495b-a15d-72b68c84ed00/public",
                                            alt: "キャンドル作り体験の様子",
                                            fill: true,
                                            className: "object-cover",
                                            sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                            lineNumber: 49,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "mb-4 text-lg font-bold",
                                                style: {
                                                    color: 'oklch(.753 .124 212.53)'
                                                },
                                                children: "基本情報"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between border-b border-gray-100 pb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-600 sm:text-base",
                                                                children: "所要時間"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                lineNumber: 72,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold sm:text-base",
                                                                children: "約90分"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between border-b border-gray-100 pb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-600 sm:text-base",
                                                                children: "定員"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold sm:text-base",
                                                                children: "1〜5名"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between border-b border-gray-100 pb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-600 sm:text-base",
                                                                children: "対象年齢"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold sm:text-base",
                                                                children: "6歳以上"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "mb-4 text-lg font-bold",
                                                style: {
                                                    color: 'oklch(.753 .124 212.53)'
                                                },
                                                children: "特徴・注意点"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-soft-pink mt-2 h-2 w-2 flex-shrink-0 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm leading-relaxed text-gray-700 sm:text-base",
                                                                children: "作品は翌日お受け取り、または郵送（送料はお客様負担）"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-soft-pink mt-2 h-2 w-2 flex-shrink-0 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm leading-relaxed text-gray-700 sm:text-base",
                                                                children: "雨の日でも安心の屋内アクティビティ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-soft-pink mt-2 h-2 w-2 flex-shrink-0 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm leading-relaxed text-gray-700 sm:text-base",
                                                                children: "初心者の方でも安心してお楽しみいただけます"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPERIENCE_MENUS"].map((menu, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            animated: true,
                            hoverEffect: true,
                            delay: index * 0.15,
                            className: "group hover:border-soft-pink/50 relative cursor-default overflow-hidden border-2 border-transparent p-6 transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-miyako-blue/5 absolute inset-0 opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-6 overflow-hidden rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$optimized$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardImage"], {
                                            src: menu.image,
                                            alt: `${menu.name} - 宮古島キャンドル体験メニュー`,
                                            width: 400,
                                            height: 400,
                                            className: "aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
                                            cloudflareOptions: {
                                                width: 400,
                                                height: 400,
                                                quality: 85,
                                                format: 'webp',
                                                fit: 'cover'
                                            },
                                            customSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        menu.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "bg-gold-highlight absolute top-3 left-3 text-gray-900 shadow-lg",
                                            children: menu.badge
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-cream-white/95 text-soft-pink absolute top-3 right-3 flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium shadow-lg backdrop-blur-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-pastel-coral",
                                                    children: "⭐"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        menu.popularity,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative space-y-4 p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold",
                                                    style: {
                                                        color: 'oklch(.753 .124 212.53)'
                                                    },
                                                    children: menu.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-left",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-soft-pink text-2xl font-bold",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(menu.price)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm leading-relaxed text-gray-700",
                                            children: menu.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: menu.features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-pastel-coral/20 rounded-full px-3 py-1 text-xs text-gray-600",
                                                    children: feature
                                                }, feature, false, {
                                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/experience/${menu.id === 'cylinder' ? 'enkei' : menu.id === 'shell' ? 'kaigara' : menu.id === 'sphere' ? 'kyutai' : menu.id === 'sphere-big' ? 'kyutai-big' : 'enkei'}`,
                                                className: "cursor-pointer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "border-miyako-blue text-miyako-blue hover:bg-miyako-blue w-full cursor-pointer rounded-full border px-6 py-2 text-sm font-medium transition-all duration-200 hover:scale-102 hover:text-white active:scale-98",
                                                    children: "詳細を見る"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, menu.id, true, {
                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-in fade-in slide-in-from-bottom-4 mt-16 delay-800 duration-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-4 text-3xl font-extrabold",
                                    style: {
                                        color: 'oklch(.753 .124 212.53)'
                                    },
                                    children: "オプションでさらに特別に✨"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto max-w-3xl text-gray-600",
                                    children: "どのキャンドルにも追加できる特別なオプションです。あなただけの特別な作品を作りましょう。"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADDITIONAL_OPTIONS"].map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    animated: true,
                                    hoverEffect: true,
                                    delay: index * 0.2,
                                    className: "group hover:border-soft-pink/50 relative cursor-default overflow-hidden border-2 border-transparent bg-white/90 p-6 backdrop-blur-sm transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-miyako-blue/5 absolute inset-0 opacity-50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative space-y-4 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4 flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-16 w-16 items-center justify-center rounded-full bg-pink-400 text-2xl text-white shadow-lg",
                                                            children: option.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xl font-bold transition-all duration-200",
                                                                    style: {
                                                                        color: 'oklch(.753 .124 212.53)'
                                                                    },
                                                                    children: option.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-soft-pink text-lg font-bold",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$master$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(option.price)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4 text-sm leading-relaxed text-gray-700",
                                                    children: option.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, this),
                                                option.detailDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs leading-relaxed text-gray-600",
                                                    children: option.detailDescription
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, option.id, true, {
                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mt-16 max-w-md text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-miyako-blue/30 bg-miyako-blue/10 p-4 text-left sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "mb-3 text-center text-lg font-bold",
                                style: {
                                    color: 'oklch(.753 .124 212.53)'
                                },
                                children: "予約は当日2時間前までOK!!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$link$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkButton"], {
                                    href: "/reservation",
                                    className: "bg-miyako-blue w-full cursor-pointer rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl",
                                    children: "予約はこちら"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/experience-menu-section.tsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/experience-menu-section.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/experience-menu-section.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_c = ExperienceMenuSection;
;
var _c;
__turbopack_context__.k.register(_c, "ExperienceMenuSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a914bebe._.js.map