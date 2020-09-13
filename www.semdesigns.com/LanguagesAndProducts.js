// Implements SD Web Page  top-of-page language/product drop-down boxes
// In order to add a language to the drop downs, add it to LangList[0], the name of the language,
// and LangList[1], the name of the array that contains the language specific products and
// their associated URLs.
// Then create an array, langProducts, which has two parts: the language specific products and
// the URLs for the products. When the drop down is constructed at run time, the products common
// to each language will be added to the front of the list and then the list randomized.
// Common products should be added to CommonProductList[0] and [1].
//

var TempList = new Array();
TempList[0] = new Array();
TempList[1] = new Array();

var CommonProductList = new Array();

CommonProductList[0] = new Array(
	'Custom Analyzers',
	'Custom Transformation',
	'Migration',
	'Clone Detector',
	'Smart Differencer',
	'Search Engine'
	// Component Connectivity
);
CommonProductList[1] = new Array(
	'/Products/DMS/DMSToolkit.html?Home=DropDown',
	'/Products/DMS/DMSToolkit.html?Home=DropDown',
	'/Products/Services/LegacyMigration.html?Home=DropDown',
	'/Products/Clone/index.html?Home=DropDown',
	'/Products/SmartDifferencer/index.html?Home=DropDown',
	'/Products/SearchEngine/index.html?Home=DropDown'
);

var LangList = new Array();

// Array of languages.
// Need 'Select' first as this script doesn't load products for the first element.
// This forces Ada to be second and its products load fine
LangList[0] = new Array(
	'Any',
	'Ada',
	'C',
	'C++',
	'C#',
	'COBOL',
	'ECMA/Java script',
	'EGL',
        'FORTRAN',
	'HTML',
	'Java',
	'JOVIAL',
	'MUMPS',
	'Natural',
	'Object Pascal',
	'Perl',
	'PHP',
	'PL/SQL',
	'Python',
	'SystemC',
	'SystemVerilog',
	'Visual Basic',
	'Verilog',
	'VHDL',
        'XML'
);
LangList[1] = new Array(
	'AnyProducts',
	'AdaProducts',
	'CProducts',
	'CppProducts',
	'CSharpProducts',
	'COBOLProducts',
	'ECMAScriptProducts',
	'EGLProducts',
	'FORTRANProducts',
	'HTMLProducts',
	'JavaProducts',
	'JOVIALProducts',
	'MUMPSProducts',
	'NaturalProducts',
	'ObjectPascalProducts',
	'PerlProducts',
	'PHPProducts',
	'PLSQLProducts',
	'PythonProducts',
	'SystemCProducts',
	'SystemVerilogProducts',
	'VisualBasicProducts',
	'VerilogProducts',
	'VHDLProducts',
	'XMLProducts'
);

var lists = new Array();

lists['AnyProducts']    = new Array();
lists['AnyProducts'][0] = new Array(
	'Formatter',
	'Obfuscator',
	'Clone Detector',
	'File Browser',
	'Source Browser',
	'Style Checker',
	'Smart Differencer',
	'Metrics',
	'Profiler',
	'Test Coverage',
	'Front End',
	'Memory Safety Checker',
	'File Inventory'
);
lists['AnyProducts'][1] = new Array(
	'/Products/Formatters/index.html?Home=DropDown',
	'/Products/Obfuscators/index.html?Home=DropDown',
	'/Products/Clone/index.html?Home=DropDown',
	'/Products/Formatters/COBOLFileBrowser.html?Home=DropDown',
	'/Products/Formatters/JavaBrowser.html?Home=DropDown',
	'/Products/StyleChecker/index.html?Home=DropDown',
	'/Products/SmartDifferencer/index.html?Home=DropDown',
	'/Products/Metrics/index.html?Home=DropDown',
	'/Products/Profilers/index.html?Home=DropDown',
	'/Products/TestCoverage/index.html?Home=DropDown',
	'/Products/FrontEnds/index.html?Home=DropDown',
	'/Products/MemorySafety/index.html?Home=DropDown',
	'/Products/FileInventory/index.html?Home=DropDown'
);

lists['AdaProducts']    = new Array();
lists['AdaProducts'][0] = new Array(
	'All',
	'Formatter',
	'Obfuscator',
	'Clone Detector',
	'Smart Differencer',
	'Front End'
);
lists['AdaProducts'][1] = new Array(
	'/Products/LanguageTools/AdaTools.html?Home=DropDown',
	'/Products/Formatters/AdaFormatter.html?Home=DropDown',
	'/Products/Obfuscators/AdaObfuscator.html?Home=DropDown',
	'/Products/Clone/AdaCloneDR.html?Home=DropDown',
	'/Products/SmartDifferencer/index.html?Home=DropDown',
	'/Products/FrontEnds/index.html?Home=DropDown'
);

// Another set of text and values
lists['CProducts']    = new Array();
lists['CProducts'][0] = new Array(
	'All',
	'Formatter',
	'Obfuscator',
	'Test Coverage',
	'Profiler',
	'Smart Differencer',
	'Front End',
	'Clone Detector',
	'Memory Safety'
);
lists['CProducts'][1] = new Array(
	'/Products/LanguageTools/CTools.html?Home=DropDown',
	'/Products/Formatters/CFormatter.html?Home=DropDown',
	'/Products/Obfuscators/CObfuscator.html?Home=DropDown',
	'/Products/TestCoverage/CTestCoverage.html?Home=DropDown',
	'/Products/Profilers/CProfiler.html?Home=DropDown',
	'/Products/SmartDifferencer/CSmartDifferencer.html?Home=DropDown',
	'/Products/FrontEnds/CFrontEnd.html?Home=DropDown',
	'/Products/Clone/CCloneDR.html?Home=DropDown',
	'/Products/MemorySafety/CMemorySafetyChecker.html?Home=DropDown'
);

// Another set of text and values
lists['COBOLProducts']    = new Array();
lists['COBOLProducts'][0] = new Array(
	'All',
	'Formatter',
        'Style Checker',
        'Smart Differencer',
        'Metrics',
	'File Browser',
	'Profiler',
	'Test Coverage',
	'Front End',
	'Clone Detector'
);
lists['COBOLProducts'][1] = new Array(
	'/Products/LanguageTools/COBOLTools.html?Home=DropDown',
	'/Products/Formatters/COBOLFormatter.html?Home=DropDown',
	'/Products/StyleChecker/COBOLStyleChecker.html?Home=DropDown',
	'/Products/SmartDifferencer/COBOLSmartDifferencer.html?Home=DropDown',
	'/Products/Metrics/COBOLMetrics.html?Home=DropDown',
	'/Products/Formatters/COBOLFileBrowser.html?Home=DropDown',
	'/Products/Profilers/COBOLProfiler.html?Home=DropDown',
	'/Products/TestCoverage/COBOLTestCoverage.html?Home=DropDown',
	'/Products/FrontEnds/COBOLFrontEnd.html?Home=DropDown',
	'/Products/Clone/COBOLCloneDR.html?Home=DropDown'
);

// Another set of text and values
lists['CppProducts']    = new Array();
lists['CppProducts'][0] = new Array(
	'All',
	'Formatter',
	'Obfuscator',
	'Profiler',
	'Test Coverage',
	'Smart Differencer',
	'Front End',
	'Clone Detector'
);
lists['CppProducts'][1] = new Array(
	'/Products/LanguageTools/CppTools.html?Home=DropDown',
	'/Products/Formatters/CppFormatter.html?Home=DropDown',
	'/Products/Obfuscators/CppObfuscator.html?Home=DropDown',
	'/Products/Profilers/CppProfiler.html?Home=DropDown',
	'/Products/TestCoverage/CppTestCoverage.html?Home=DropDown',
	'/Products/SmartDifferencer/CppSmartDifferencer.html?Home=DropDown',
	'/Products/FrontEnds/CppFrontEnd.html?Home=DropDown',
	'/Products/Clone/CppCloneDR.html?Home=DropDown'
);

// Another set of text and values
lists['CSharpProducts']    = new Array();
lists['CSharpProducts'][0] = new Array(
	'All',
	'Formatter',
	'Obfuscator',
	'Metrics',
	'Profiler',
	'Test Coverage',
	'SmartDifferencer',
	'Front End',
	'Clone Detector'
);
lists['CSharpProducts'][1] = new Array(
	'/Products/LanguageTools/CSharpTools.html?Home=DropDown',
	'/Products/Formatters/CSharpFormatter.html?Home=DropDown',
	'/Products/Obfuscators/CSharpObfuscator.html?Home=DropDown',
	'/Products/Metrics/CSharpMetrics.html?Home=DropDown',
	'/Products/Profilers/CSharpProfiler.html?Home=DropDown',
	'/Products/TestCoverage/CSharpTestCoverage.html?Home=DropDown',
	'/Products/SmartDifferencer/CSharpSmartDifferencer.html?Home=DropDown',
	'/Products/FrontEnds/CSharpFrontEnd.html?Home=DropDown',
	'/Products/Clone/CSharpCloneDR.html?Home=DropDown'
);

// Another set of text and values
lists['ECMAScriptProducts']    = new Array();
lists['ECMAScriptProducts'][0] = new Array(
	'All',
	'Formatter',
	'Obfuscator',
	'Front End',
	'Clone Detector'
);
lists['ECMAScriptProducts'][1] = new Array(
	'/Products/LanguageTools/ECMAScriptTools.html?Home=DropDown',
	'/Products/Formatters/ECMAScriptFormatter.html?Home=DropDown',
	'/Products/Obfuscators/ECMAScriptObfuscator.html?Home=DropDown',
	'/Products/FrontEnds/ECMAScriptFrontEnd.html?Home=DropDown',
	'/Products/Clone/ECMAScriptCloneDR.html?Home=DropDown'
);

// Another set of text and values
lists['EGLProducts']    = new Array();
lists['EGLProducts'][0] = new Array(
	'All',
	'Formatter',
	'Front End'
);
lists['EGLProducts'][1] = new Array(
	'/Products/LanguageTools/EGLTools.html?Home=DropDown',
	'/Products/Formatters/EGLFormatter.html?Home=DropDown',
	'/Products/FrontEnds/EGLFrontEnd.html?Home=DropDown'
);

// Another set of text and values
lists['FORTRANProducts']    = new Array();
lists['FORTRANProducts'][0] = new Array(
	'Front End'
);
lists['FORTRANProducts'][1] = new Array(
	'/Products/FrontEnds/FORTRANFrontEnd.html?Home=DropDown'
);

// Another set of text and values
lists['HTMLProducts']    = new Array();
lists['HTMLProducts'][0] = new Array(
	'All',
	'Formatter',
	'Obfuscator',
	'Front End'
);
lists['HTMLProducts'][1] = new Array(
	'/Products/FrontEnds/HTMLFrontEnd.html?Home=DropDown',
	'/Products/Formatters/ECMAScriptFormatter.html?Home=DropDown',
	'/Products/Obfuscators/ECMAScriptObfuscator.html?Home=DropDown',
	'/Products/FrontEnds/HTMLFrontEnd.html?Home=DropDown'
);

// Another set of text and values
lists['JavaProducts']    = new Array();
lists['JavaProducts'][0] = new Array(
	'All',
	'Formatter',
	'Obfuscator',
	'Source Browser',
	'Smart Differencer',
	'Metrics',
	'Profiler',
	'Test Coverage',
	'Front End',
	'Clone Detector'
);
lists['JavaProducts'][1] = new Array(
	'/Products/LanguageTools/JavaTools.html?Home=DropDown',
	'/Products/Formatters/JavaFormatter.html?Home=DropDown',
	'/Products/Obfuscators/JavaObfuscator.html?Home=DropDown',
	'/Products/Formatters/JavaBrowser.html?Home=DropDown',
	'/Products/SmartDifferencer/JavaSmartDifferencer.html?Home=DropDown',
	'/Products/Metrics/JavaMetrics.html?Home=DropDown',
	'/Products/Profilers/JavaProfiler.html?Home=DropDown',
	'/Products/TestCoverage/JavaTestCoverage.html?Home=DropDown',
	'/Products/FrontEnds/JavaFrontEnd.html?Home=DropDown',
	'/Products/Clone/JavaCloneDR.html?Home=DropDown'
);

lists['JOVIALProducts']    = new Array();
lists['JOVIALProducts'][0] = new Array(
	'All',
	'JOVIAL2C',
	'Front End'
);
lists['JOVIALProducts'][1] = new Array(
	'/Products/LanguageTools/JOVIALTools.html?Home=DropDown',
	'/Products/MigrationTools/JOVIAL2C.html?Home=DropDown',
	'/Products/FrontEnds/JOVIALFrontEnd.html?Home=DropDown'
);

lists['MUMPSProducts']    = new Array();
lists['MUMPSProducts'][0] = new Array(
	'All',
	'Front End'
);
lists['MUMPSProducts'][1] = new Array(
	'/Products/LanguageTools/MUMPSTools.html?Home=DropDown',
	'/Products/FrontEnds/MUMPSFrontEnd.html?Home=DropDown'
);

// Another set of text and values
lists['NaturalProducts']    = new Array();
lists['NaturalProducts'][0] = new Array(
	'Clone Detector',
	'Migration'
);
lists['NaturalProducts'][1] = new Array(
	'/Products/Clone/NaturalCloneDR.html?Home=DropDown',
	'/Products/Services/NaturalMigration.html?Home=DropDown'
);

// Another set of text and values
lists['ObjectPascalProducts']    = new Array();
lists['ObjectPascalProducts'][0] = new Array(
	'All',
	'Formatter',
	'Front End'
);
lists['ObjectPascalProducts'][1] = new Array(
	'/Products/LanguageTools/ObjectPascalTools.html?Home=DropDown',
	'/Products/Formatters/ObjectPascalFormatter.html?Home=DropDown',
	'/Products/FrontEnds/index.html?Home=DropDown'
);

lists['PerlProducts']    = new Array();
lists['PerlProducts'][0] = new Array(
	'All',
	'Front End'
);
lists['PerlProducts'][1] = new Array(
	'/Products/LanguageTools/PerlTools.html?Home=DropDown',
	'/Products/FrontEnds/PerlFrontEnd.html?Home=DropDown'
);

// Another set of text and values
lists['PHPProducts']    = new Array();
lists['PHPProducts'][0] = new Array(
	'All',
	'Formatter',
	'Obfuscator',
        'Profiler',
        'Test Coverage',
	'Smart Differencer',
	'Front End',
	'Clone Detector'
);
lists['PHPProducts'][1] = new Array(
	'/Products/LanguageTools/PHPTools.html?Home=DropDown',
	'/Products/Formatters/PHPFormatter.html?Home=DropDown',
	'/Products/Obfuscators/PHPObfuscator.jsp?Home=DropDown',
	'/Products/Profilers/PHPProfiler.html?Home=DropDown',
	'/Products/TestCoverage/PHPTestCoverage.jsp?Home=DropDown',
	'/Products/SmartDifferencer/PHPSmartDifferencer.html?Home=DropDown',
	'/Products/FrontEnds/PHPFrontEnd.html?Home=DropDown',
	'/Products/Clone/PHPCloneDR.html?Home=DropDown'
);

// Another set of text and values
lists['PLSQLProducts']    = new Array();
lists['PLSQLProducts'][0] = new Array(
	'All',
	'Formatter',
	'Obfuscator',
	'Front End'
);
lists['PLSQLProducts'][1] = new Array(
	'/Products/LanguageTools/PLSQLTools.html?Home=DropDown',
	'/Products/Formatters/PLSQLFormatter.html?Home=DropDown',
	'/Products/Obfuscators/PLSQLObfuscator.html?Home=DropDown',
	'/Products/FrontEnds/index.html?Home=DropDown'
);

// Another set of text and values
lists['PythonProducts']    = new Array();
lists['PythonProducts'][0] = new Array(
	'All',
	'Formatter',
	'Obfuscator',
        'Profiler',
        'Test Coverage',
	'Smart Differencer',
	'Front End',
	'Clone Detector'
);
lists['PythonProducts'][1] = new Array(
	'/Products/LanguageTools/PythonTools.html?Home=DropDown',
	'/Products/Formatters/index.html?Home=DropDown',
	'/Products/Obfuscators/index.html?Home=DropDown',
	'/Products/Profilers/index.html?Home=DropDown',
	'/Products/TestCoverage/index.html?Home=DropDown',
	'/Products/SmartDifferencer/index.html?Home=DropDown',
	'/Products/FrontEnds/PythonFrontEnd.html?Home=DropDown',
	'/Products/Clone/PythonCloneDR.html?Home=DropDown'
);

// Another set of text and values
lists['SystemCProducts']    = new Array();
lists['SystemCProducts'][0] = new Array(
	'Formatter',
	'Obfuscator',
	'Front End'
);
lists['SystemCProducts'][1] = new Array(
	'/Products/Formatters/SystemCFormatter.html?Home=DropDown',
	'/Products/Obfuscators/SystemCObfuscator.html?Home=DropDown',
	'/Products/FrontEnds/CppFrontEnd.html?Home=DropDown'
);

// Another set of text and values
lists['SystemVerilogProducts']    = new Array();
lists['SystemVerilogProducts'][0] = new Array(
	'Formatter',
	'Obfuscator',
	'Smart Differencer',
	'Front End'
);
lists['SystemVerilogProducts'][1] = new Array(
	'/Products/Formatters/SystemVerilogFormatter.html?Home=DropDown',
	'/Products/Obfuscators/SystemVerilogObfuscator.html?Home=DropDown',
	'/Products/SmartDifferencer/index.html?Home=DropDown',
	'/Products/FrontEnds/VerilogFrontEnd.html?Home=DropDown'
);

// Another set of text and values
lists['VisualBasicProducts']    = new Array();
lists['VisualBasicProducts'][0] = new Array(
	'Formatter',
	'Obfuscator',
	'Metrics',
	'Front End',
	'Clone Detector'
);
lists['VisualBasicProducts'][1] = new Array(
	'/Products/Formatters/VBScriptFormatter.html?Home=DropDown',
	'/Products/Obfuscators/VBScriptObfuscator.html?Home=DropDown',
	'/Products/Metrics/VBScriptMetrics.html?Home=DropDown',
	'/Products/FrontEnds/index.html?Home=DropDown',
	'/Products/Clone/VisualBasicCloneDR.html?Home=DropDown'
);

// Another set of text and values
lists['VerilogProducts']    = new Array();
lists['VerilogProducts'][0] = new Array(
	'All',
	'Formatter',
	'Obfuscator',
	'Smart Differencer',
	'Front End'
);
lists['VerilogProducts'][1] = new Array(
	'/Products/LanguageTools/VerilogTools.html?Home=DropDown',
	'/Products/Formatters/VerilogFormatter.html?Home=DropDown',
	'/Products/Obfuscators/VerilogObfuscator.html?Home=DropDown',
	'/Products/SmartDifferencer/index.html?Home=DropDown',
	'/Products/FrontEnds/VerilogFrontEnd.html?Home=DropDown'
);

// Another set of text and values
lists['VHDLProducts']    = new Array();
lists['VHDLProducts'][0] = new Array(
	'All',
	'Formatter',
	'Obfuscator',
	'Smart Differencer',
	'Front End'
);
lists['VHDLProducts'][1] = new Array(
	'/Products/LanguageTools/VHDLTools.html?Home=DropDown',
	'/Products/Formatters/VHDLFormatter.html?Home=DropDown',
	'/Products/Obfuscators/VHDLObfuscator.html?Home=DropDown',
	'/Products/SmartDifferencer/index.html?Home=DropDown',
	'/Products/FrontEnds/VHDLFrontEnd.html?Home=DropDown'
);

// Another set of text and values
lists['XMLProducts']    = new Array();
lists['XMLProducts'][0] = new Array(
	'All',
	'Smart Differencer',
	'Front End'
);
lists['XMLProducts'][1] = new Array(
	'/Products/FrontEnds/XMLFrontEnd.html?Home=DropDown',
	'/Products/SmartDifferencer/index.html?Home=DropDown',
	'/Products/FrontEnds/XMLFrontEnd.html?Home=DropDown'
);

// This function goes through the options for the given
// drop down box and removes them in preparation for
// a new set of values

function emptyList( box ) {
	// Set each option to null thus removing it
	while ( box.options.length ) box.options[0] = null;
}

// This function assigns new drop down options to the given
// drop down box from the list of lists specified

function fillList( box, arr ) {
	// arr[0] holds the display text
	// arr[1] are the values (URLs)

	for ( i = 0; i < arr[0].length; i++ ) {

		// Create a new drop down option with the
		// display text and value from arr

	        option_name = arr[0][i];

                matched = false;
                for ( j = 0; j<box.length; j++)
			  { if (box.options[j].name==option_name)
				  { matched=true; break; }
			  }
                if (matched==false)
		    { option = new Option( option_name, arr[1][i] );
 		      // Add to the end of the existing options
		      box.options[box.length] = option;
		    }
	}

// Select the first option
	box.selectedIndex=0;

}
function fillListRand( box, arr ) {
	// arr[0] holds the display text which consists of language specific tools concatenated
	//	with a generic list of tools
	// arr[1] are the values (URLs) that are either language specific or general tool URLs.
	var Shadow = new Array();

// randomize the starting point for loading the array
	index = Math.floor(Math.random()*arr[0].length);
	for ( i = index; i < arr[0].length + index; i++ ) {

		// Create a new drop down option with the
		// display text and value from arr

		option = new Option( arr[0][i % arr[0].length], arr[1][i % arr[0].length] );

		// Add to the end of the existing options

                matched = false;
                for ( j = 0; j<box.length; j++)
			  { if (Shadow[j]==arr[0][i % arr[0].length])
			  	// this tool language specific and already in the list
				  { matched=true; break; }
			  }
                if (matched==false)
		    { //option = new Option( option, arr[1][i] );
 		      // Add to the end of the existing options
		      box.options[box.length] = option;
		      Shadow[j] = arr[0][i % arr[0].length];
		    }
	}
// Select the first option
//	box.selectedIndex=0;

}

// This function performs a drop down list option change by first
// emptying the existing option list and then assigning a new set

function changeList( box ) {
	// Isolate the appropriate list by using the value
	// of the currently selected option

	list = lists[document.drops.language[box.selectedIndex].value];

	// Next empty the product list
	emptyList( box.form.product );

	// Then assign the new list values
	TempList[0] = CommonProductList[0].concat(list[0]);
	TempList[1] = CommonProductList[1].concat(list[1]);

	fillListRand( box.form.product, TempList );
//	fillList( box.form.product, list );
}

function changeListRand( box ) {
	// Empty the language list

	emptyList( box.form.language );
	// randomize the starting point for loading the array
	index = Math.floor(Math.random() * LangList[0].length);
	for ( i = index; i < LangList[0].length + index; i++ ) {

		// Create a new drop down option with the
		// randomized display text from the list of languages
		option = new Option( LangList[0][i % LangList[0].length], LangList[1][i % LangList[0].length] );

		// Add to the end of the existing options
		box.options[box.length] = option;
	}
	// Select the first option
//	box.selectedIndex=0;

	// Next empty the product list
	emptyList( box.form.product );

	// Isolate the appropriate list by using the value of the currently selected option
	// This is where we make the new lists, combining the common stuff and the language specific list
	list = lists[LangList[1][index]];

	TempList[0] = list[0];
	TempList[1] = list[1];
 
        // merge in CommonProducts not already present in the list
	for ( i = 1; i < CommonProductList[0].length; i++ ) {
            common_product_name=CommonProductList[0][i];
            common_product_found_in_list=false;
	    for ( j = 1; i < list[0].length; i++ ) {
	       if (list[0][j]==common_product_name)
                  { common_product_found_in_list=true; break; }
            }
	    if (common_product_found_in_list==false) {
               TempList[0].push(common_product_name);
               TempList[1].push(CommonProductList[1][i]);
            }
        }  

	// Randomize the list entries and display
        fillListRand( box.form.product, TempList );
}

// Code for Popping up a picture full size in a popup window.
// Put it here rather than in a separate file to make it less error prone to add the capability to another file.
// It's not much code and everyone includes this file.

   function PopupPic(sPicURL) {
     window.open( "/popup.htm?"+sPicURL, "",
     "resizable=1,HEIGHT=200,WIDTH=200");
   }

// add more "onload" events for a window
function addLoadEvent(func) { 
	  var oldonload = window.onload; 
	  if (typeof window.onload != 'function') { 
	    window.onload = func; 
	  } else { 
	    window.onload = function() { 
	      if (oldonload) { 
	        oldonload(); 
	      } 
	      func(); 
	    } 
	  } 
	}
