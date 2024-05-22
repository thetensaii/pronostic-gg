import vine from "@vinejs/vine";

export const createLeagueValidator = vine.compile(
  vine.object({
    owner_id: vine.number(),
    competition_id: vine.number(),
    name: vine.string(),
  })
)