# Lorem Ipsum / Words generator

## Demo

[Demo](https://benfarhat.github.io/lorem-ipsum-generator/)

## Usage
### Some examples with attribute:

```
 
    
    <!-- Lorem Ipsum generator -->
    <script src="src/js/lorem_ipsum.js"></script>

    <!-- Simple usage -->
    <h2 data-lorem-count="2" data-lorem-end=""></h2>
    <p data-lorem-count="60"></p>
    

    
    <!-- With form element (input and textarea) -->
    <h2><script>randomLorem(3,'- ',' -')</script></h2>
    <label>Tell us about your projects:</label>
    <input type="text" value="" data-lorem-count="4" data-lorem-end="">
    <label>Send us a kind message:</label>
    <textarea class="form" type="text" value="" data-lorem-count="60" data-lorem-end=""></textarea>   
     
```

### Some examples with function (lorem -> Using a dictionary from lorem Ipsum):

```

    <!-- Lorem Ipsum generator -->
    <script src="src/js/lorem_ipsum.js"></script>

    
    <!-- Add some HTML code to the result -->
    <h2><script>lorem(3)</script></h2>
    <p><script>lorem(60,'','... <a href="#">Read More</a>')</script></p> 

    
     
```

### Some examples with function (generateLorem -> generate word from custom alphabet (consonants & vowels):

```
    
    <!-- Lorem Ipsum generator -->
    <script src="src/js/lorem_ipsum.js"></script>

    
    <!-- With other character (Greek here) -->
    <h2><script>randomLorem(3,'- ',' -','αβγδϵζηθικλμνξοπρστυϕχψω','')</script></h2>
    <p><script>randomLorem(80,'','...','αβγδϵζηθικλμνξοπρστυϕχψω','')</script></p> 
    
    
    <!-- By default it uses english alphabet -->
    <h2><script>randomLorem(3,'- ',' -')</script></h2>
    
    
    <!-- With other character (arabic alphabet here) -->
    <h2><script>randomLorem(3,'- ',' -','ي و ه ش س ق ف غ ع ض ص ن م ل ك ظ ط ز ر ذ د خ ح ج ث ت ب ا','')</script></h2>
    <p><script>randomLorem(40,'','...','ي و ه ش س ق ف غ ع ض ص ن م ل ك ظ ط ز ر ذ د خ ح ج ث ت ب ا','')</script></p>
     
```

2017 🖥 Benfarhat Elyes
