function cachingDecoratorNew(func) {
  let cache = {};
  function wrapper(...args) {
    let hash = args.join(',');
    if (hash in cache) { // если значение уже присутствует в кэше, то отдаем его
      return 'Из кэша: ' + cache[hash];
    } else {
      let result = func.call(this, ...args); // иначе считаем результат
      let _keys = Object.keys(cache); 
      if (_keys.length == 5) { // если длина кэша достигла максимального значения
        delete cache[_keys[0]]; // удаляем первое значение, добавленное в кэш, освобождая место для нового
      }
      cache[hash] = result;
      return 'Вычисляем: ' + result;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
