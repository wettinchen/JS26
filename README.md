## JavaScript Chapter 26
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 JavaScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## JavaScript Chapter 26
   Quick Concept outline
   中文摘要說明與重點提問

###  1. Intro 
        教學影片開頭和介紹

###  2. What is a callback function? <Code更動>
        callback 是一種方法，用其他 parameter 傳輸到其他 函數function

###  3. What is the problem with callbacks? 
        什麼是 callback 地獄?

###  4. JavaScript Promises have 3 states 
        Pending, Fulfilled, Rejected
        擱置: 初始狀態，不是 fulfilled 與 rejected。
        實現（fulfilled）: 表示操作成功地完成。
        拒絕（rejected）: 表示操作失敗。

        操作沒有錯誤，使用 resolve() 回傳 Yes, resolved the promise!；
        操作有錯誤，回傳 reject()回傳 No, rejected the promise!；

###  5. A promise may not return a value where you expect it to: You need to wait for a promise to resolve
        promise 可能會回傳字串

###  6. Using thenables with a promise
        (1)宣告 error 為 false，使用 promise.then() 得到 promise 的 value值為 Yes, resolved the promise!；
        (2)宣告 error 為 false，使用 promise.then() 回傳 Yes, resolved the promise!1；
        (3)宣告 error 為 true，使用 promise.then() 得到 Uncaught (in promise) No, rejected the promise!
        (4)宣告 error 為 true，使用 promise.catch() 參數為 error，用 arrow function 回傳結果 No, rejected the promise!
        (5)宣告 myNextPromise 為 promise 建構式，
        使用 date.setTime() ，
        回傳 myNextPromise resolved! 時間設定3000毫秒；使用 promise.then() 回傳 myNextPromise 和 myPromise 的結果
        (6)宣告 users，使用 fetch() 取得資料，promise 尚未 resolve，有一些程式暫停，promise 持續運作，所以需要等待。
        (7)使用 fetch() 取得資料，response 尚未準備運作
        (8)使用 request.json() 回傳，使用 promise.then() 回傳資料。
        (9)使用 forEach() 回傳逐筆資料。

###  7. An easy mistake to make with promises
        (1)最外層的 console.log() 沒有執行
        (2)修改錯誤

###  8. Creating an async function
        宣告 myUsers 為 object物件，宣告 myCoolFunction 為 async() asynchronous fucntion非同步函數
        
###  9. Applying await inside the function
        (1)在 asynchronous fucntion 應用 await
        (2)比較結果
        (3)思考為什麼會回傳 空的 array
        (4)思考為什麼會先回傳 空的 array

### 10. Example 1: Retrieving user data
        
### 11. Example 2: Retrieving dad jokes
        
### 12. Example 3: Posting data
        
### 13. Example 4: Retrieving data with URL parameters

### 14. Abstract it all into single responsibility functions
        
