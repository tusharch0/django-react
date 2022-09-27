import { Button, Collapse } from "antd";
import React from "react";

const { Panel } = Collapse;

function Faqs() {
	return (
		<div id="faq" className="block faq-block">
			<div className="fluid-container">
				<div className="title-section">
					<h2>Frequently Asked Questions</h2>
					<p>
						What are the most frequently asked questions regarding
						properties?
					</p>
				</div>
				<Collapse defaultActiveKey={["1"]}>
					<Panel header="How do I find the right property?">
						<p>
							With Our advanced ML algorithum it find the best property that fits your requirements.
						</p>
					</Panel>
					<Panel header="How do I know I can trust your agents?">
						<p>
							All agents are verified by our executives to avoid any fraud transaction use our in house payment method.
						</p>
					</Panel>
					<Panel header="Who are your major clients?">
						<p>
							All those who want new home for their family or for their self.
						</p>
					</Panel>
					<Panel header="How do I get in touch?">
						<p>
							Press contact button or text your query and we will arrange the call back.
						</p>
					</Panel>
					<Panel header="Do I need to create an account?">
						<p>
							Yes you need to create an account before buying any property.
						</p>
					</Panel>
				</Collapse>
				<div className="quick-support">
					<h3>Want expedited support?</h3>
					<p>
						Contact +91xxxxxxxxxx
						Address : #xx, Sector: xx, Mohali, Punjab, India
						Email: contact@realestate.com
					</p>
					<Button type="primary" size="large">
						<i className="fas fa-envelope"></i> Email your question!
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Faqs;