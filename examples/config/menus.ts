/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 UXmid Inc. All rights reserved. 
 */

const menus =
[
    {
        title: "概览",
        path: "/intro",
        icon: "pie-graph"
    },
    {
        title: "组件",
        path: "/components",
        icon: "ios-keypad",
        children:
        [
            {
                title: "基本",
                children:
                [
                    {
                        title: "颜色",
                        path: "/components/color",
                        icon: "android-color-palette"
                    },
                    {
                        title: "按钮",
                        path: "/components/button",
                        icon: "social-youtube-outline"
                    },
                    {
                        title: "数字计数",
                        path: "/components/number-counter",
                        icon: "ios-more"
                    },
                    {
                        title: "编辑域",
                        path: "/components/edit-field",
                        icon: "ios-compose-outline"
                    }
                ]
            }
        ]
    }
];

export default menus;
