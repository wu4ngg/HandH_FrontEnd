function changeSelected(element: any, array: Array<any>, value: boolean, key: string) {
    return array.map((e) => {
      if (e == element) {
        return {
          ...element,
          [key]: value,
        };
      }
      return {
        ...e,
        [key]: false,
      };
    });
}
export default changeSelected;