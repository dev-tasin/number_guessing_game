let game = document.querySelector(".game")
let img_one = document.querySelector(".img_one")
let img_two = document.querySelector(".img_two")
let player = document.querySelector(".player")
let chance = document.querySelector(".chance")
let chance_count = document.querySelector(".chance_count")
let player_one = document.querySelector(".player_one")
let player_one_input = document.querySelector(".player_one_input")
let player_one_err = document.querySelector(".player_one_err")
let player_one_btn = document.querySelector(".player_one_btn")
let player_two = document.querySelector(".player_two")
let player_two_input = document.querySelector(".player_two_input")
let player_two_err = document.querySelector(".player_two_err")
let player_two_btn = document.querySelector(".player_two_btn")
let restart = document.querySelector(".restart")
let player_one_store_number;
let chances = 5
let value = document.querySelector(".value")
let tasin = document.querySelector(".tasin")

player_one_btn.addEventListener("click" , function(){
    if (Boolean(player_one_input.value)) {
        if (Boolean(player_one_input.value - 20)) {
            if (player_one_input.value >= 0 && player_one_input.value <= 10) {
                player_one_err.innerHTML = "";
                player.innerHTML = "Second Player";
                player_one.style.display = "none";
                player_two.style.display = "block";
                player_one_store_number = player_one_input.value
            }
            else{
                player_one_err.innerHTML = "Number must be between or equal 0 to 10"
            }
        }
        else{
            player_one_err.innerHTML = "Please don't use text, enter a number -!"
        }
    }
    else{
        player_one_err.innerHTML = "Please enter a number to start :)"
    }
})

player_two_btn.addEventListener('click' , function(){
    if (Boolean(player_two_input.value)) {
        if (Boolean(player_two_input.value - 20)) {
            if (player_two_input.value >= 0 && player_two_input.value <= 10) {
                player_two_err.innerHTML = ""
                if (chances !== 1) {
                    chances--
                    if (player_one_store_number == player_two_input.value) {
                        player_two_err.innerHTML = "";
                        player.innerHTML = "Congratulations, You are Winner!";
                        player_two_input.style.display = "none";
                        player_two_btn.style.display = "none";
                        img_two.style.display = "block";
                        img_one.style.display = "none";
                        restart.style.display = "block"
                        chance.style.display = "none"

                    }
                    else{
                        chance_count.innerHTML = chances
                        player_two_err.innerHTML = "Wrong Number!! Please try again."
                    }
                }
                else{
                    player.innerHTML = "Opps! First Player is Winner";
                    player_two_input.style.display = "none";
                    player_two_btn.style.display = "none";
                    chance.style.display = "none";
                    img_two.style.display = "block";
                    img_one.style.display = "none";
                    restart.style.display = "block";
                    tasin.style.display = "block"
                    value.innerHTML = player_one_store_number
                }
            }
            else{
                player_two_err.innerHTML = "Number must be between or equal 0 to 10"
            }
        }
        else{
            player_two_err.innerHTML = "Please don't use text, enter a number -!"
        }
    }
    else{
        player_two_err.innerHTML = "Please enter a number to start :)"
    }
})

restart.addEventListener("click" , function(){
    location.reload()
})