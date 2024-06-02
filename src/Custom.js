export const customTurnOrder = {
    first: () => 0,
    next: ({ ctx }) => ((ctx.playOrderPos + 1) >= ctx.numPlayers) ? undefined : ctx.playOrderPos + 1,
    playOrder: ( { G, ctx} ) => ctx.playOrder
}

export const player = {
  name: "Investigator",
  investigatorSheet: {},
  investigatorCards: {
    common: [],
    unique: [],
    spell: [],
    skill: [],
    ally: [],
    retainer: false,
    membership: false,
    loan: false,
    bless: false,
    curse: false,
  },
  investigatorState: {
    money: 0,
    clueToken: 0,
    stamina: 0,
    sanity: 0,
    spSn: 0,
    fiWi: 0,
    loLu: 0,
    delayed: false
  }
}
