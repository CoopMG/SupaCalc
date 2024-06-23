using Microsoft.VisualBasic.FileIO;
using System.Linq;


//(part1) of (shape) using (part2)
public class NestedList
{
    public List<NestedList> NestedLists { get; set; } = new List<NestedList>();
    public List<string> Strings { get; set; } = new List<string>();
}
class FormulaFinder
{
    private static Dictionary<List<string>, string> gallery;
    static void Main(string[] args)
    {
        Console.WriteLine("Input: ");

        string inp = Console.ReadLine() ?? "";
        List<string> userInput = SortDescription(inp);
        
        Dictionary<string, string> data = Get_Data("/Users/coopergrant/Desktop/code/GeoCalc/GeoFormulas.txt");
        gallery = Process_Data(data);
        
        Console.WriteLine();
        
        string userInp = userInput[userInput.Count-1];
        string userOut = userInput[0];
        List<string> route = FindRoute(userInp, userOut);
    }

    static Dictionary<string, string> Get_Data(string txt){
        List<string[]> data = new List<string[]>();
        using (TextFieldParser parser = new TextFieldParser(txt))
        {
            parser.TextFieldType = FieldType.Delimited;
            parser.SetDelimiters(",");

            while (!parser.EndOfData)
            {
                // Read current line fields, assume each field is a string
                string[]? fields = parser.ReadFields();
                data.Add(fields);
            }
        }
        Dictionary<string, string> dict = new Dictionary<string, string>();
        foreach (string[] line in data){
            dict[line[0].ToLower()] = line[1];
        }
        return dict;
    }
    
    public static Dictionary<List<string>, string> Process_Data(Dictionary<string, string> data){
        Dictionary<List<string>, string> newDict = new Dictionary<List<string>, string>();
        foreach ((string description, string formula) in data){
            List<string>sortedDesc = SortDescription(description);
            newDict[sortedDesc] = formula;
        }
        return newDict;
    }

    public static List<string> SortDescription(string desc)
    {
        string p1 = desc.Split("of")[0].Replace(" ", "");
        string shape = desc.Split("of")[1].Split("using")[0].Replace(" ", "");
        string p2 = desc.Split("using")[1].Replace(" ", "");
        return new List<string>(){p1, shape, p2};
    }
    public static List<string> NextLayer(string userInp, string userOut)
    {
        List<string> route = new List<string>();
        
        HashSet<string> inpOpens = new HashSet<string>(){userInp};
        HashSet<string> outOpens = new HashSet<string>(){userOut};
        HashSet<string> inpFormulas = new HashSet<string>(){userOut};
        HashSet<string> outFormulas = new HashSet<string>(){userOut};

                
        //find formulas
        foreach ((List<string> desc, string formula) in gallery)
        {
            //add all formulas that include inp into inpOpens and formulas
            if (desc[0] == userInp){
                inpFormulas.Add(formula);
                inpOpens.Add(desc[^1]);
            }
            if (desc[^1] == userInp){
                inpFormulas.Add(formula);
                inpOpens.Add(desc[0]);
            }

            //add all formulas that include out into outOpens and formulas
            if (desc[0] == userOut){
                outFormulas.Add(formula);
                outOpens.Add(desc[^1]);
            }
            if (desc[^1] == userOut){
                outFormulas.Add(formula);
                outOpens.Add(desc[0]);
            }
        }

        //find any formulas having an input and output contained in inpopens and outopens
        HashSet<string> connections = outFormulas.Intersect(inpFormulas).ToHashSet();

        return route;
    }
    public static List<string> FindRoute(string userInp, string userOut)
    {
        NestedList searchReference = new NestedList();
        List<string> route = new List<string>();

        NextLayer(userInp, userOut);
        return route;
    }
}
