/**
 * 此代码采用 GPL-3.0 许可证, 请查看 LICENSE.txt 或 https://www.gnu.org/licenses/gpl-3.0.txt
 * Copyright (C) 2022 dsy4567 (https://github.com/dsy4567 | dsy4567@outlook.com)
 * 您还可以在这里找到源码 https://github.com/dsy4567/Anti-addiction-terminator
 */

/* global chrome */
if (location.href.includes("aat-bypass")) {
    localStorage.setItem("aat-bypass",true)
}
if (location.host == "jubao.chinaso.com"&&!localStorage.getItem("aat-bypass")) {
    chrome.runtime.sendMessage({ 操作: "0" }, () => {});
}