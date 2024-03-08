import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

    'docs/musings/':[
        {
            text: '2023',
            collapsed: false,
            items: [
              { text: '2023年的生活感悟', link: 'docs/musings/2023年的生活感悟.md' },
                ]
        },
        {
            text: '2024',
            collapsed: false,
            items: [
                { text: '安娜堡的学习日常', link: 'docs/musings/安娜堡的学习日常.md' },
                { text: '分析Orthoimagery Manhattan', link: 'docs/musings/分析Orthoimagery Manhattan.md' },
            ]
        },
    ],

    '/docs/MIT18.06/':[
        {
            text: 'MIT18.06 Lecture 1-10',
            collapsed: false,
            items: [
              { text: '第一讲: 方程组的几何解释', link: 'docs/MIT18.06/chapter01' },
              { text: '第二讲: 矩阵消元', link: 'docs/MIT18.06/chapter02' },
              { text: '第三讲: 乘法和逆矩阵', link: 'docs/MIT18.06/chapter03' },
              { text: '第四讲: A 和 LU 分解', link: 'docs/MIT18.06/chapter04' },
              { text: '第五讲: 转换、置换、向量空间R', link: 'docs/MIT18.06/chapter05' },
              { text: '第六讲: 列空间和零空间', link: 'docs/MIT18.06/chapter06' },
              { text: '第七讲: 求解Ax=0,主变量，特解', link: 'docs/MIT18.06/chapter07' },
              { text: '第八讲: 求解Ax=b: 可解性和解的结构', link: 'docs/MIT18.06/chapter08' },
              { text: '第九讲: 线性相关性、基、维数', link: 'docs/MIT18.06/chapter09' },
              { text: '第十讲: 四个基本子空间', link: 'docs/MIT18.06/chapter10' },
            ]
        },
        {
            text: 'MIT18.06 Lecture 10-15',
            collapsed: true,
            items: [
              { text: '第十一讲: 矩阵空间、秩1矩阵和小世界图', link: 'docs/MIT18.06/chapter11' },
              { text: '第十二讲: 图和网络', link: 'docs/MIT18.06/chapter12' },
              { text: '第十三讲: 复习一', link: 'docs/MIT18.06/chapter13' },
              { text: '第十四讲: 正交向量与子空间', link: 'docs/MIT18.06/chapter14' },
              { text: '第十五讲: 子空间投影', link: 'docs/MIT18.06/chapter15' },
            ]
        },
        {
            text: 'MIT18.06 Lecture 16-20',
            collapsed: true,
            items: [
              { text: '第十六讲: 投影矩阵和最小二乘', link: 'docs/MIT18.06/chapter16' },
              { text: '第十七讲: 正交矩阵和Gram-Schmidt正交化法', link: 'docs/MIT18.06/chapter17' },
              { text: '第十八讲: 行列式及其性质', link: 'docs/MIT18.06/chapter18' },
              { text: '第十九讲: 行列式公式和代数余子式', link: 'docs/MIT18.06/chapter19' },
              { text: '第二十讲: 克拉默法则、逆矩阵、体积', link: 'docs/MIT18.06/chapter20' },
            ]
        },
        {
            text: 'MIT18.06 Lecture 21-30',
            collapsed: true,
            items: [
              { text: '第二十一讲: 特征值和特征向量', link: 'docs/MIT18.06/chapter21' },
              { text: '第二十二讲: 对角化和A的幂', link: 'docs/MIT18.06/chapter22' },
              { text: '第二十三讲: 微分方程和$e^{At}$', link: 'docs/MIT18.06/chapter23' },
              { text: '第二十四讲: 马尔科夫矩阵、傅里叶级数', link: 'docs/MIT18.06/chapter24' },
              { text: '第二十五讲: 复习二', link: 'docs/MIT18.06/chapter25' },
              { text: '第二十六讲: 对称矩阵及正定性', link: 'docs/MIT18.06/chapter26' },
              { text: '第二十七讲: 复数矩阵和快速傅里叶变换', link: 'docs/MIT18.06/chapter27' },
              { text: '第二十八讲: 正定矩阵和最小值', link: 'docs/MIT18.06/chapter28' },
              { text: '第二十九讲: 相似矩阵和若尔当形', link: 'docs/MIT18.06/chapter29' },
              { text: '第三十讲: 奇异值分解', link: 'docs/MIT18.06/chapter30' },

            ]
        },
        {
            text: 'MIT18.06 Lecture 31-35',
            collapsed: true,
            items: [
              { text: '第三十一讲: 线性变换及对应矩阵', link: 'docs/MIT18.06/chapter31' },
              { text: '第三十二讲: 基变换和图像压缩', link: 'docs/MIT18.06/chapter32' },
              { text: '第三十三讲: 单元检测3复习', link: 'docs/MIT18.06/chapter33' },
              { text: '第三十四讲: 左右逆和伪逆', link: 'docs/MIT18.06/chapter34' },
              { text: '第三十五讲: 期末复习', link: 'docs/MIT18.06/chapter35' },
            ]
        }
    ],

    '/docs/deeplearning':[
        { text: '序章', link: 'docs/deeplearning/README' },
        { text: 'C1W1', link: 'docs/deeplearning/c1w1' },
        // { text: 'C1W2', link: 'docs/deeplearning/c1w2' },
    ]
}
