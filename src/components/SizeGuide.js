import React from 'react';

const SizeGuide = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">

        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <b>Size Chart</b>
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                 data-bs-parent="#accordionFlushExample">
                <div className="accordion-body size-guide-body">
                    <table>
                        <thead>
                        <tr>
                            <th>Sizes</th>
                            <th>Bust (Inches)</th>
                            <th>Waist (Inches)</th>
                            <th>Hip (Inches)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><b>XS (UK6)</b></td>
                            <td>32</td>
                            <td>26</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td><b>S (UK8)</b></td>
                            <td>34</td>
                            <td>28</td>
                            <td>37</td>
                        </tr>
                        <tr>
                            <td><b>M (UK10)</b></td>
                            <td>36</td>
                            <td>30</td>
                            <td>39</td>
                        </tr>
                        <tr>
                            <td><b>L (UK12)</b></td>
                            <td>38</td>
                            <td>32</td>
                            <td>41</td>
                        </tr>
                        <tr>
                            <td><b>XL (UK14)</b></td>
                            <td>40</td>
                            <td>34</td>
                            <td>43</td>
                        </tr>
                        <tr>
                            <td><b>XL (UK16)</b></td>
                            <td>42</td>
                            <td>36</td>
                            <td>45</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SizeGuide;
