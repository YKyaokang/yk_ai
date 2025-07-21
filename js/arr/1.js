const arr = new Array(5);  // 指定了大小，并未使用fill指定元素
        console.log(arr) 

        const mixedArray = [
            42,                       // Number
            "Hello",                  // String
            { name: "Object" },       // Object
            [1, 2, 3],                // Array
            true,                     // Boolean
            null,                     // Null
            undefined,                // Undefined
            function() {              // Function
              return "I'm a function";
            },
            new Date(),               // Date
            /regex/,                  // RegExp
            Symbol("foo")             // Symbol
          ];
          
          console.log(mixedArray.length);  // 11