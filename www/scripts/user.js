function userConstructor(name) {
    return {
        name: name,
        wentFirst: false,

        gameResults: new Array(),

        /* Result Helper Functions */
        recordWin: function () {
            this.gameResults.push("win");
        },
        recordLoss: function () {
            this.gameResults.push("lose");
        },
        recordTie: function () {
            this.gameResults.push("tie");
        },

        /* Total Helper Functions */
        getTotalWins: function () {
            var total = 0;
            for (var i = 0; i < this.gameResults.length; i++) {
                if (this.gameResults[i] == "win") {
                    total++;
                }
            }
            return total;
        },
        getTotalLoses: function () {
            var total = 0;
            for (var i = 0; i < this.gameResults.length; i++) {
                if (this.gameResults[i] == "lose") {
                    total++;
                }
            }
            return total;
        },


        getTotalTies: function () {
            var total = 0;
            for (var i = 0; i < this.gameResults.length; i++) {
                if (this.gameResults[i] == "tie") {
                    total++;
                }
            }
            return total;
        }
    };
}