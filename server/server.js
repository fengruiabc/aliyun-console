/**
 * Created by zhangfengrui on 2018/4/11.
 */
/**
 * Created by zhangfengrui on 2018/3/19.
 */
const express = require('express')
const path = require('path')

const app = express()

const fs = require('fs')

const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')

app.use('/public', express.static(path.join(__dirname, '../dist')))


app.get('*', function (req, res) {
  res.send(template)
})

app.listen(3000, function() {
  console.log('listen success on 3000')
})

