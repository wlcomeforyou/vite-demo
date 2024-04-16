
// vite 内置了postCss 无需再安装
import {Plugin} from 'postcss'
export const postcssPxToViewport = ():Plugin => {
  // 高保约定：设计稿宽度的
  const viewportWidth = 1920
  return {
    postcssPlugin: "postcss-px-to-viewport",
    Declaration(node) {
      // 拦截需要适配转换的css
      // 例如：width: 100vx vx为需要转换的标志
      if (node.value.includes('vx')) {
        let value = parseFloat(node.value);
        // 根据设计稿宽度换算成vw数据
        node.value = `${(value/viewportWidth*100).toFixed(2)}vw`;
      }
    }
  }
}