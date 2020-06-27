## Aclaraciones

El buscador de marvel usa el evento onBlur en vez del onChange ya que no estaba seguro cual usar pero me parecia mmas logico usar el onBlur.

La busqueda por Url soporta solo un personaje y un comic porque no estaba seguro como mandar varios personajes a la vez a la api de marvel. Consdierando esto, como usé URLSearchParams para obtener los datos del query string, si el comic tiene numeral dentro del title no lo toma, por lo que hice un includes del title y no un matcheo exacto, es decir que cuando muestre el modal pueden aparecer varios comics.

Cuando se hace una busqueda de un comic por url de marvel, hice un history push a una nueva vista para el detalle del comic.
