const correctAnswers = ['B','B','B','A','B']
const answer = document.querySelector('.result')

const form = document.querySelector('.quiz-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value,form.q5.value]
    console.log(userAnswers)
    console.log(correctAnswers)
    // check answers

    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index])
        {
            score += 20
        }
    })

    // Result of the quiz
  
    answer.querySelector('span').textContent = `${score}%`
    answer.classList.remove('d-none')
    scrollTo(0,0)

    let output = 0;
    const timer = setInterval(() => {
        answer.querySelector('span').textContent = `${output}%`
        if(output === score){
            clearInterval(timer)
        }
        else{
            output++;
        }
    },10)
})