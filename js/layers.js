addLayer("layer1", {
    name: "layer1", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "l1", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        //part1
        unlocked: true,
	points: new ExpantaNum(0),
    }},
    color: "#4BDC13",
    requires: new omeganum(0),
    resource: "testPoint2", // Name of prestige currency
    baseResource:"testPoint1",
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new ExpantaNum(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排

})
