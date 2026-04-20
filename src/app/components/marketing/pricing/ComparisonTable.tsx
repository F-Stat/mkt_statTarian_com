export function ComparisonTable() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <h3
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Compare Plans
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left border-b border-border">
                <th className="py-4 font-semibold">Feature</th>
                <th className="py-4 font-semibold text-center">Core</th>
                <th className="py-4 font-semibold text-center">Performance</th>
                <th className="py-4 font-semibold text-center">Advanced</th>
                <th className="py-4 font-semibold text-center">Elite</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-4">All Core features</td>
                <td className="text-center">✓</td>
                <td className="text-center">✓</td>
                <td className="text-center">✓</td>
                <td className="text-center">✓</td>
              </tr>

              <tr>
                <td className="py-4">Advanced reporting</td>
                <td className="text-center">—</td>
                <td className="text-center">✓</td>
                <td className="text-center">✓</td>
                <td className="text-center">✓</td>
              </tr>

              <tr>
                <td className="py-4">Multi‑team analytics</td>
                <td className="text-center">—</td>
                <td className="text-center">—</td>
                <td className="text-center">✓</td>
                <td className="text-center">✓</td>
              </tr>

              <tr>
                <td className="py-4">Custom branding</td>
                <td className="text-center">—</td>
                <td className="text-center">—</td>
                <td className="text-center">—</td>
                <td className="text-center">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
