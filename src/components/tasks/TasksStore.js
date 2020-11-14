export const tasksStore = {
  debug: true,
  state: {
    lastId: 12,
    initialData: [
      {
        id: 12,
        title: 'Oddaj izdelek',
        description: 'Oddaj izdelek v ocenjevanje',
        contactId: 8,
      },
      {
        id: 11,
        title: 'Preveri pravilnost rešitev',
        description: '',
        contactId: 19
      },
      {
        id: 10,
        title: 'Udeleži se dogodka',
        description: 'V petek ob 18 uri',
        contactId: 26
      },
      {
        id: 9,
        title: 'Preglej razpored',
        description: '',
      },
      {
        id: 8,
        title: 'Dodeli nedeodeljene naloge',
        description: 'Vse nedodeljene naloge razdeli med kontakte',
        contactId: 7
      },
      {
        id: 7,
        title: 'Opolni šefa o sestanku',
        description: 'Sestanek s podjetjem',
        contactId: 4
      },
      {
        id: 6,
        title: 'Realiziraj končni produkt',
        description: '',
      },
      {
        id: 5,
        title: 'Testiraj produkt',
        description: '',
      },
      {
        id: 4,
        title: 'Odpravi javljeno napako',
        description: 'Stranka je po elektonski pošti javila napako',
      },
      {
        id: 3,
        title: 'Dostavi produkt',
        description: 'Na naslov Celovša 987',
      },
      {
        id: 2,
        title: 'Pripravi zagovor',
        description: 'Pripravi zagovor opravljenega dela',
        contactId: 33
      },
      {
        id: 1,
        title: 'Naredi nalogo za matematiko',
        description: 'Integralni izračun',
        contactId: 18,
      },
    ]
  },
  getTaskById(id) {
    return this.state.initialData.find(task => task.id === id);
  },
  getContactTasks(id) {
    return this.state.initialData.filter(task => task.contactId === id);
  },
  saveToStorage() {
    localStorage.setItem('tasks-store', JSON.stringify(this.state.initialData));
  }
}
