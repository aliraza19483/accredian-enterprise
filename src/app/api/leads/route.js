import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "leads.json");

async function getLeads() {
  try {
    const data = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveLeads(leads) {
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validation
    if (!name || !email || !company || !phone) {
      return NextResponse.json(
        { error: "Name, email, company, and phone are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const lead = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      phone: phone.trim(),
      message: message?.trim() || "",
      createdAt: new Date().toISOString(),
    };

    const leads = await getLeads();
    leads.push(lead);
    await saveLeads(leads);

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully!",
        lead: { id: lead.id, name: lead.name, email: lead.email },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error capturing lead:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await getLeads();
    return NextResponse.json({ leads, total: leads.length });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
