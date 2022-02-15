
    const friends = [
        'Sam',
        'Carol',
        'Jenna',
        'Paul',
        'Brad'
    ];

    const button = document.querySelector('.button');


    button.addEventListener('click', function () {
        for (let i = 0; i < friends.length; i++) {

            const name = friends[i];

            const newDiv = document.createElement('div');
            newDiv.className = 'friend';

            const heading = document.createElement('h3')
            heading.textContent = name;

            newDiv.appendChild(heading);
            document.body.appendChild(newDiv);


            for (let j = 99; j > 0; j--) {

                let newPara = document.createElement('p');

                if (j === 2) {

                    const song1 = j + 'lines of code in the file,' + ' ' + j + ' ' + 'lines of code;' + ' ' + name + ' ' + 'strikes one out' + ' ' + 'clears it all out,' + (j - 1) + ' ' + 'line of code in the file';

                    newPara.textContent = song1;
        
                    

                } else if (j === 1) {

                    const song2 = j + ' ' + 'line of code in the file,' + ' ' + j + ' ' + 'line of code;' + ' ' + name + ' ' + 'strikes one out' + ' ' + 'clears it all out,' + ' ' + 'no more lines of code in the file';

                    newPara.textContent = song2 ;
                  
                   

                } else {

                    const song3 = j + 'lines of code in the file,' + ' ' + j + ' ' + 'lines of code;' + ' ' + name + ' ' + 'strikes one out' + ' ' + 'clears it all out,' + (j - 1) + 'lines of code in the file';

                    newPara.textContent = song3;                 
                    
                }
                newDiv.appendChild(newPara);
            }

        }



    })

