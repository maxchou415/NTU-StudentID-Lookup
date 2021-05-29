# NTU Student ID Lookup
臺灣大學學號找尋對應系所。

## Usage
1. Install the package
```bash
npm install --save ntu-studentid-lookup
```
2. Call and use it
```js
const lookup = require('ntu-studentid-lookup')
const department = lookup({ studentId: 'T09902345' })
console.log(department)
// '資工系'
```

## Test
```
npm run test
```
We covered: 
1. First character uppercase with legal department code. (Ex. `B09902007`)
2. First character lowercase with legal department code. (Ex. `b09902007`)
3. General Student Id lookup to make sure the function is working normally. (Ex. For EE ID - `B09901001`)
4. Illegal department code validation. (Ex. `B09Z01001`)
5. Illegal format (Length) validation. (Ex. `b09Z0200`)