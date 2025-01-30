document.addEventListener("DOMContentLoaded", function () {
    // লোকাল স্টোরেজ থেকে ব্যালেন্স লোড করা
    let balance = parseInt(localStorage.getItem("balance")) || 0;
    document.getElementById("balanceDisplay").textContent = balance;

    function updateBalance(amount) {
        balance += amount;
        localStorage.setItem("balance", balance); // লোকাল স্টোরেজে ব্যালেন্স সংরক্ষণ
        document.getElementById("balanceDisplay").textContent = balance;
    }

    document.getElementById("claimBonusButton").addEventListener("click", function () {
        updateBalance(10000);
        alert("You have received 💎 10000 bonus!");
    });

    document.getElementById("referButton").addEventListener("click", function () {
        updateBalance(10000);
        alert("You have earned 💎 10000 for referring!");
    });

    document.getElementById("dailyRewardsButton").addEventListener("click", function () {
        updateBalance(1000);
        alert("You have received 💎 1000 from Daily Rewards!");
    });

    document.getElementById("startGameButton").addEventListener("click", function () {
        startGame();
    });

    document.getElementById("joinMultiplayer").addEventListener("click", function () {
        alert("Multiplayer mode activated!");
    });

    document.getElementById("playWithAI").addEventListener("click", function () {
        alert("Playing against AI...");
        playAgainstAI();
    });

    function startGame() {
        alert("Game started!");
        let playerHand = drawCards(2);
        let aiHand = drawCards(2);
        document.getElementById("player-hand").textContent = "Your Cards: " + playerHand.join(", ");
        document.getElementById("ai-hand").textContent = "AI Cards: " + aiHand.join(", ");
        checkWinner(playerHand, aiHand);
    }

    function drawCards(num) {
        let deck = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
        let hand = [];
        for (let i = 0; i < num; i++) {
            let randomIndex = Math.floor(Math.random() * deck.length);
            hand.push(deck[randomIndex]);
        }
        return hand;
    }

    function checkWinner(playerHand, aiHand) {
        let playerScore = calculateHandValue(playerHand);
        let aiScore = calculateHandValue(aiHand);
        
        if (playerScore > aiScore) {
            alert("You Win! 💎 +500");
            updateBalance(500);
        } else if (playerScore < aiScore) {
            alert("AI Wins! You Lose.");
        } else {
            alert("It's a Draw!");
        }
    }

    function calculateHandValue(hand) {
        let values = {
            "A": 14, "K": 13, "Q": 12, "J": 11, "10": 10,
            "9": 9, "8": 8, "7": 7, "6": 6, "5": 5,
            "4": 4, "3": 3, "2": 2
        };
        return values[hand[0]] + values[hand[1]];
    }

    function playAgainstAI() {
        let playerHand = drawCards(2);
        let aiHand = drawCards(2);
        checkWinner(playerHand, aiHand);
    }
});
