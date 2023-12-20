# REACT-COOL-TABLE
compatible Node v18 et +

1. Reconnait les données

2. Traite les données

3. Affiche les données

4. Navigue dans les données

React-Cool-Table, est une table cool, une table pour React. Pour les données JSON.
Il s'agit d'une adaptation pour React de DataTable de jquery.

## Les colonnes

React-cool-table a confiance en vos clés JSON, pour elle, les proprietes ont déjà le titre de leur colonne. React-cool-table traite les camelCase et ajoute un espace avant chacun d'eux pour donner un titre explicite dans une liste utilisée pour former l'entête des colonnes.

React-cool-table donne le choix d'exclure des colonnes du resultat final.

## Les dates

React-cool-table n'a pas confiance aux formats de dates qui peuvent diverger sur les grands fichiers JSON. Chaque valeur de clé sera scrupté pour en déduire s'il s'agit d'un format de date, ou non, et s'il s'agit d'un format de date: ce dernier est standardisé dans le format de date FR. Jour, mois, année.

## Les propriétés dans les propriétés

React-cool-table applatie les données et ne traite que les clés. Chaque individu; clé, compte pour React-cool-table.

## Ordonner ses données

React-cool-table permet au click de l'utilisateur d'organiser chaque colonne dans l'ordre ascendant ou descendant de l'alphabet ou des nombres.

## La navigation

React-cool-table ne perd personne. Avec sa pagination minitieuse et l'interface de sa navigation, accedez en un clique à la page désirée. Un aperçu de 10 boutons de pages encadré par la premiere et la dernière page permet de les sauter ou de les enchainer de façon linéaire.

## Le style CSS

React-cool-table à sa propre feuille de style. Elle est prête à être étudier. Chaque classe possède un cool prefix pour éviter les confusions avec les autres fichiers css.

## Usage/Examples

React-cool-table est disponible pour les développeurs React en tant que composant JSX. Son nom d'export est... : CoolTable.

Voici un exemple d'utilisation avec un cas concret : une liste d'employés a afficher au sein d'un autre composant :

```javascript
import { useSelector } from "react-redux";
import "react-cool-table/dist/index.es.css";
import { CoolTable } from "react-cool-table";

function EmployeeList() {
  const employees = useSelector((state) => state.form.employees);
  return <CoolTable data={employees} excludedColumns={["id"]} />;
}

export default EmployeeList;
```

Un composant : beaucoup de possibilités.
C'est simple, efficace, rapide et cool.
C'est react-cool-table

## Demo

React-cool-table au coeur de l'action :

https://leen1515.github.io/hrnet/#/employes


React-cool-table DOCS:
https://leen1515.github.io/react-cool-table/

# REACT-COOL-TABLE
compatible Node v18 and +


1. Recognizes data

2. Processes data

3. Displays data

4. Navigates through data

React-Cool-Table is a cool table, a table for React. It's for JSON data. This is a React adaptation of jQuery's DataTable.

## Columns

React-cool-table trusts your JSON keys; it considers properties as their column titles. React-cool-table handles camelCase by adding a space before each to create explicit titles in a list used to form column headers.

React-cool-table allows the exclusion of columns from the final result.

## Dates

React-cool-table distrusts date formats in large JSON files. Each key's value is scrutinized to determine if it's a date format. If so, the format is standardized to the French date format: Day, Month, Year.

## Nested Properties

React-cool-table flattens data and only processes keys. Each key, or individual, is significant for React-cool-table.

## Data Ordering

React-cool-table enables users to sort each column in ascending or descending alphabetical or numerical order with a click.

## Navigation

React-cool-table ensures no one is lost. With meticulous pagination and a user-friendly navigation interface, users can easily access the desired page. A preview of 10 page buttons framed by the first and last pages allows for linear progression or skipping through pages.

## CSS Style

React-cool-table has its own stylesheet, ready to import from its dist folder. Each class has a cool prefix to avoid confusion with other CSS files.

## Usage/Examples

React-cool-table is available to React developers as a JSX component. Its export name is CoolTable.

Here's an example usage in a practical case: displaying a list of employees within another component:

```javascript
import { useSelector } from "react-redux";
import "react-cool-table/dist/index.es.css";
import { CoolTable } from "react-cool-table";

function EmployeeList() {
  const employees = useSelector((state) => state.form.employees);
  return <CoolTable data={employees} excludedColumns={["id"]} />;
}

export default EmployeeList;
```

A component with many possibilities. It's simple, efficient, fast, and cool. This is react-cool-table.

## Demo

React-cool-table in action:

https://leen1515.github.io/hrnet/#/employes


React-cool-table DOCS:
https://leen1515.github.io/react-cool-table/
