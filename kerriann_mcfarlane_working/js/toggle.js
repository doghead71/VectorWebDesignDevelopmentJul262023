        function toggleFive() {
            let div5 = document.getElementById('Five')

            if (div5.innerHTML == 'Five') {
                //do action if condition true
                div5.innerHTML = '5';
            } else {//condition is false
                //do action if condition false
                div5.innerHTML = 'Five';
            }
        }