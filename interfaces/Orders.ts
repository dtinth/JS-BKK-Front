export interface Restaurant {
  key: number;
  title: string;
  merchant: string;
  genres: string[];
  allergics?: string[];
  menu: Menu[];
}

export interface Menu {
  name: string;
  thaiName: string;
  foods: Food[];
}

export interface MyOrder {
  food: string;
  drink: string;
  spice: string;
  dessert: string
}

export interface Food {
  name: string;
  thaiName: string;
}
