const input1 = document.getElementById('num-1');
const input2 = document.getElementById('num-2');
const result = document.querySelector('.result');

document.addEventListener("click", function(e){
    const addition = e.target.closest("#sum");
    const reduce = e.target.closest('#minus');
    const times = e.target.closest('#multiply');
    const division = e.target.closest('#divide')
    if(addition){
     addNum(input1, input2)
    }else if(reduce){
        minusNum(input1, input2)
    } else if(times){
        multiplyNum(input1, input2)
    } else if(division){
        divideNum(input1, input2)
    };
  });

function addNum(input1, input2){
    let sumOf = parseInt(input1.value) + parseInt(input2.value);
    total(sumOf);
};

function minusNum(input1, input2){
    let sumOf = parseInt(input1.value) - parseInt(input2.value);
    total(sumOf);
};

function multiplyNum(input1, input2){
    let sumOf = parseInt(input1.value) * parseInt(input2.value);
    total(sumOf);
};

function divideNum(input1, input2){
    let sumOf = parseInt(input1.value) / parseInt(input2.value);
    total(sumOf);
};

function total(sumOf){
if(!isNaN(sumOf)){
    result.innerHTML = `${sumOf}`;
    input1.value = '';
    input2.value = '';
} else{
    result.innerHTML = `Please enter a number`;
    input1.value = '';
    input2.value = '';
};
}

  

