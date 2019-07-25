/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 UXmid Inc. All rights reserved. 
 */

import { Application } from "uxmid-core";
import ApplicationContext from "./application/context";

// 获取应用上下文
let context = ApplicationContext.current;

// 启动应用程序
Application.start(context);
