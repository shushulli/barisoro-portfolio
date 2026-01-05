// Tools and Languages section
export const ToolsLangSection = () => {

    return ( 
<> 


<section className="bg-black">
        <div className="max-6xl mx-auto shadow-2xl shadow-pink-100">
            {/* Grid with 12 cols, gap of 6 */}
          <div className="grid sm:grid-cols-1 md:grid-cols-12 gap-6 border-2">
            
            {/* TOOLS & LANGUAGES CELL */}
            <div className="col-span-7 bg-amber-50 p-6 rounded-lg shadow-md min-h-65 md:min-h-65 lg:min-h-65 border-2 border-e-amber-600">
              <h1 className="text-lg font-bold mb-4">
              sdsd
              </h1>

              <div className="rounded bg-amber-600 p-4 flex gap-4 flex-wrap">
                <span className="bg-amber-300 px-3 py-1 rounded text-sm font-semibold">
                  HTML
                </span>
                <span className="bg-amber-300 px-3 py-1 rounded text-sm font-semibold">
                  CSS
                </span>
                <span className="bg-amber-300 px-3 py-1 rounded text-sm font-semibold">
                  JavaScript
                </span>
              </div>
            </div>

            {/* LABEL */}
            <div className="col-span-5 flex items-center justify-center border-2">
              <h1 className="text-6xl font-semibold -tracking-widest text-white">
                TOOLS AND LANGUAGES
              </h1>
            </div>

          </div>
        </div>
      </section>



</>
    ); 
} 