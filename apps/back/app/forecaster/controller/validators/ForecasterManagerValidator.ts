import vine from "@vinejs/vine";

export const createForecasterValidator = vine.compile(
  vine.object({
    username: vine.string()
  })
)