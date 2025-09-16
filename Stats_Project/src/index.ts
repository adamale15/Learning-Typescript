import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// const matches =
// const reader = new MatchReader("football.csv");
// reader.read();
// console.log(reader.data[0][0]);

// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying the DataReader interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   // new ConsoleReport()
//   new HtmlReport()
// );

const summary = Summary.winsAnalysisWithHtmlReport("Leicester");

summary.buildAndPrintReport(matchReader.matches);
