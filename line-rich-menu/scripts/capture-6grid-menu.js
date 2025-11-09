#!/usr/bin/env node

/**
 * LINEリッチメニュー（6分割版）画像自動生成スクリプト
 * 2500x1686px, 6分割レイアウト
 *
 * 使用方法:
 * 1. Puppeteerをインストール: npm install puppeteer
 * 2. スクリプト実行: node scripts/capture-6grid-menu.js
 */

const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

async function capture6GridMenu() {
  console.log('🎨 6-Grid LINE Rich Menu Image Generation Started...')
  console.log('📐 Target size: 2500x1686px (3x2 grid)')

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-web-security',
      '--font-render-hinting=none',
      '--disable-font-subpixel-positioning',
      '--force-device-scale-factor=1', // 大きいサイズなので1倍で
    ],
  })

  try {
    const page = await browser.newPage()

    // 正確なビューポート設定（インタラクティブ版用に大きめに設定）
    await page.setViewport({
      width: 2800,
      height: 2000,
      deviceScaleFactor: 1,
    })

    // HTMLファイルを読み込み
    const htmlPath = path.join(
      __dirname,
      '../templates/line-rich-menu-6grid.html'
    )
    const htmlUrl = `file://${htmlPath}`

    console.log('📄 Loading 6-Grid HTML:', htmlUrl)

    await page.goto(htmlUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    })

    // フォント読み込み待機
    await page.evaluateHandle('document.fonts.ready')

    // 画像読み込み確認（背景画像なので単純に待機）
    console.log('Waiting for background images to load...')

    // 追加の待機時間
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // 出力ディレクトリ作成
    const outputDir = path.join(__dirname, '../assets')
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // リッチメニューコンテナ要素を特定してキャプチャ
    const outputPath = path.join(outputDir, 'iepoyo-candle-6grid-menu.png')

    console.log('📸 Capturing 6-grid menu screenshot...')

    const element = await page.$('.rich-menu-container')
    if (!element) {
      throw new Error('Rich menu container not found')
    }

    await element.screenshot({
      path: outputPath,
      type: 'png',
      omitBackground: false,
    })

    console.log('✅ 6-Grid Menu image generated successfully!')
    console.log('📁 Output path:', outputPath)

    // ファイル情報確認
    const stats = fs.statSync(outputPath)
    const fileSizeKB = Math.round(stats.size / 1024)
    const fileSizeMB = (stats.size / 1024 / 1024).toFixed(2)

    console.log('\n📊 File Information:')
    console.log(`   Size: ${fileSizeKB} KB (${fileSizeMB} MB)`)
    console.log(`   Dimensions: 2500x1686px`)
    console.log(`   Format: PNG`)
    console.log(`   Grid: 3x2 (6 sections)`)
    console.log(`   Each cell: 833x843px`)

    if (fileSizeKB > 1024) {
      console.log('⚠️  Warning: File size exceeds 1MB LINE limit')
      console.log('   Generating compressed version...')

      // 圧縮版を生成
      const compressedPath = path.join(
        outputDir,
        'iepoyo-candle-6grid-resort-menu-compressed.jpg'
      )

      await element.screenshot({
        path: compressedPath,
        type: 'jpeg',
        quality: 85,
      })

      const compressedStats = fs.statSync(compressedPath)
      const compressedSizeKB = Math.round(compressedStats.size / 1024)

      console.log('\n🗜️  Compressed version:')
      console.log(`   Size: ${compressedSizeKB} KB`)
      console.log(`   Format: JPEG (85% quality)`)
      console.log(`   Path: ${compressedPath}`)
    }

    // セクション別プレビュー生成
    console.log('\n🔍 Generating section previews...')

    const sections = [
      { name: 'AB-eye-catch', selector: '.area-ab' },
      { name: 'C-contact', selector: '.area-c' },
      { name: 'DE-reservation', selector: '.area-de' },
      { name: 'F-instagram', selector: '.area-f' },
    ]

    for (const section of sections) {
      const sectionElement = await page.$(section.selector)
      if (sectionElement) {
        await sectionElement.screenshot({
          path: path.join(outputDir, `preview-${section.name}.png`),
        })
      }
    }

    console.log('📂 Section previews generated')

    // グリッド確認用画像（デバッグ用）
    await page.evaluate(() => {
      const style = document.createElement('style')
      style.textContent = `
                .rich-menu-container > * {
                    outline: 2px solid red !important;
                }
            `
      document.head.appendChild(style)
    })

    await element.screenshot({
      path: path.join(outputDir, 'debug-grid-outline-resort.png'),
    })

    console.log('🐛 Debug grid outline generated')
  } catch (error) {
    console.error('❌ Error generating 6-Grid Rich Menu:', error)
    process.exit(1)
  } finally {
    await browser.close()
    console.log('\n🎯 6-Grid Rich Menu generation completed!')
  }
}

// エラーハンドリング
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
  process.exit(1)
})

// メイン実行
if (require.main === module) {
  capture6GridMenu().catch(console.error)
}

module.exports = { capture6GridMenu }
