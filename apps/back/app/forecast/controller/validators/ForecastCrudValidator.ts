import vine from "@vinejs/vine";

export const updateOrCreateForecastValidator = vine.compile(
  vine.object({
    forecaster_id: vine.number(),
    match_id: vine.number(),
    team_a_score: vine.number(),
    team_b_score: vine.number(),
  })
)